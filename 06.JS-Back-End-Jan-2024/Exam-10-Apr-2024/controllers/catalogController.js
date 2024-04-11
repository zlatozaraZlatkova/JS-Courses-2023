const router = require("express").Router();
const { getAll, createItem, getById, updateById, deleteById, voteItem, getSearchItem} = require("../services/catalogService");
const { hasUser } = require("../middlewares/guards");
const { parseError } = require("../utils/parser");

router.get("/", async (req, res) => {
  const volcanoes = await getAll();
  res.render("catalog", {
    title: "Catalog Page",
    volcanoes,
  });
});

router.get("/create", hasUser(), async (req, res) => {
  const volcanoes = await getAll();
  res.render("create", {
    title: "Create Page",
    volcanoes,
  });
});

router.post("/create", hasUser(), async (req, res) => {
  const userId = req.user._id;

  const volcano = {
    name: req.body.name,
    location: req.body.location,
    elevation: Number(req.body.elevation),
    lastEruption: Number(req.body.lastEruption),
    imageURL: req.body.imageURL,
    typeVolcano: req.body.typeVolcano,
    description: req.body.description,
    owner: req.user._id,
  };

  try {
    if (Object.values(volcano).some((v) => !v)) {
      throw new Error("All fields are required!");
    }

    await createItem(userId, volcano);

    res.redirect("/catalog");
  } catch (err) {
    const errors = parseError(err);

    res.render("create", {
      title: "Request Error",
      errors,
      body: volcano,
    });
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    const volcano = await getById(req.params.id);

    if (req.user) {
      volcano.isOwner = req.user._id.toString() === volcano.owner.toString();
      volcano.isVoted = volcano.voteList.some((user) => user.equals(req.user._id));
    }

    volcano.totalVotes = volcano.voteList.length;

    res.render("details", {
      title: "Details Page",
      volcano,
    });
    
  } catch (err) {
    res.render("404", {
      title: "404 Page",
    });
  }
});

router.get("/details/:id/edit", hasUser(), async (req, res) => {
  const volcano = await getById(req.params.id);

  if (volcano.owner.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  res.render("edit", {
    title: "Edit Page",
    volcano,
  });
});

router.post("/details/:id/edit", hasUser(), async (req, res) => {
  const volcano = await getById(req.params.id);
  const volcanoId = req.params.id;

  if (volcano.owner.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  try {
    await updateById(volcanoId, req.body);
    res.redirect(`/catalog/details/${volcanoId}`);
  } catch (err) {
    const errors = parseError(err);
    res.render("edit", {
      title: "Request Error",
      errors,
      volcano: req.body,
    });
  }
});

router.get("/details/:id/delete", hasUser(), async (req, res) => {
  const volcano = await getById(req.params.id);

  if (volcano.owner.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  await deleteById(req.params.id, req.user._id);
  res.redirect("/catalog");
});

router.get("/details/:id/vote", hasUser(), async (req, res) => {
  const volcano = await getById(req.params.id);

  try {
    if (
      volcano.owner._id.toString() !== req.user._id.toString() &&
      volcano.voteList.some((user) => user._id.equals(req.user._id)) == false
    ) {
      await voteItem(req.params.id, req.user._id);
    }

    return res.redirect(`/catalog/details/${req.params.id}`);
  } catch (err) {
    const errors = parseError(err);
    res.render("details", {
      title: "Request Error",
      errors,
    });
  }
});

router.get("/search", async (req, res) => {
  const volcanoes = await getSearchItem(req.query.search, req.query.typeVolcano);
  
  res.render("search", {
    title: "Search",
    volcanoes,
  });
});

module.exports = router;
