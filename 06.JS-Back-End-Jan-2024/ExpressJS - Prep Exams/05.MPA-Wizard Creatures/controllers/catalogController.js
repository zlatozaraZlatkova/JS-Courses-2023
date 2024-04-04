const router = require("express").Router();
const { getAll, createItem, getById, updateById, deleteById, voteItem } = require("../services/catalogService");
const { hasUser } = require("../middlewares/guards");
const { parseError } = require("../utils/parser");

router.get("/", async (req, res) => {
  const creatures = await getAll();
  res.render("catalog", {
    title: "Catalog Page",
    creatures
  })
})

router.get("/create", hasUser(), async (req, res) => {
  const creatures = await getAll();
  res.render("create", {
    title: "Create Page",
    creatures

  })
})

router.post("/create", hasUser(), async (req, res) => {
  const userId = req.user._id;
  const creature = {
    name: req.body.name,
    species: req.body.species,
    skinColor: req.body.skinColor,
    eyeColor: req.body.eyeColor,
    imageURL: req.body.imageURL,
    description: req.body.description,
    owner: req.user._id
  }

  try {

    if (Object.values(creature).some(v => !v)) {
      throw new Error("All fields are required!");
    }

    await createItem(userId, creature);

    res.redirect("/catalog");


  } catch (err) {
    const errors = parseError(err);

    res.render("create", {
      title: "Request Error",
      errors,
      body: creature

    })
  }

})

router.get("/details/:id", async (req, res) => {

  const creature = await getById(req.params.id);

  //BUY 
  if (req.user) {
    creature.isOwner = req.user._id.toString() == creature.owner._id.toString();
    creature.isVoted = creature.usersVotesList.map(v => v._id.toString()).includes(req.user._id);
    //creature.isVoted = creature.usersVotesList.some(user => user._id.equals(req.user._id));
  }

  creature.author = `${creature.owner.firstName} ${creature.owner.lastName}`;

  creature.votedUser = creature.usersVotesList.map(e => e.email).join(", ").split(" , ")
  creature.totalVotes = creature.usersVotesList.length;


  res.render('details', {
    title: 'Details',
    creature,

  });


})

router.get("/details/:id/edit", hasUser(), async (req, res) => {
  const creature = await getById(req.params.id);

  if (creature.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login")
  }

  res.render("edit", {
    title: "Edit Page",
    creature
  })

})

router.post("/details/:id/edit", hasUser(), async (req, res) => {
  const creature = await getById(req.params.id);
  const creatureId = req.params.id;

  console.log(creature)
  console.log("request body:", req.body)


  if (creature.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  try {
    //! important req.body 
    await updateById(req.params.id, req.body);
    res.redirect(`/catalog/details/${creatureId}`)

  } catch (err) {
    const errors = parseError(err);
    res.render("edit", {
      title: "Request Error",
      errors,
      creature: req.body
    })
  }

})



router.get("/details/:id/delete", hasUser(), async (req, res) => {
  const creature = await getById(req.params.id);

  if (creature.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  await deleteById(req.params.id, req.user._id);
  res.redirect("/catalog");


})

//Votes

router.get('/details/:id/vote', hasUser(), async (req, res) => {
  const creature = await getById(req.params.id);

  try {
    if (creature.owner._id.toString() !== req.user._id.toString() && creature.usersVotesList.some(user => user._id.equals(req.user._id)) == false) {
      await voteItem(req.params.id, req.user._id);
    }

    return res.redirect(`/catalog/details/${req.params.id}`);

  } catch (err) {
    const errors = parseError(err);
    res.render("details", {
      title: "Request Error",
      errors,
    })
  }



});




module.exports = router;