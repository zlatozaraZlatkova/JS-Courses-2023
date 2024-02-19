const router = require("express").Router();

const {  getById, updateById, createStone, deleteById, likesUser} = require("../services/catalogService");
const { parseError } = require("../utils/parser");
const { hasUser } = require("../middlewares/guards");


router.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Page",
  });
});

router.post("/create", hasUser(), async (req, res) => {
  const userId = req.user._id;


  const stone = {
    name: req.body.name,
    category: req.body.category,
    color: req.body.color,
    image: req.body.image,
    location: req.body.location,
    formula: req.body.formula,
    description: req.body.description,
    owner: req.user._id
  };
  try {
    
    if (Object.values(stone).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await createStone(userId, stone);
    res.redirect("/catalog");
  } catch (err) {
    const errors = parseError(err);


    res.render("create", {
      title: "Request Error",
      errors,
      body: stone,
    });
  }
});



router.get("/details/:id", async(req, res) => {
  const stone = await getById(req.params.id);
  
  if(req.user) {
    if(stone.owner ==  req.user._id) {
      stone.isOwner = true;
    }
    
    const liked = stone.likedList.find(user => user._id == req.user._id);
    console.log(liked)

    if(liked != undefined) {
      stone.isLiked = true;
    }
  
  }

  res.render("details", {
    title: "Details Page",
    stone

  })
})

router.get("/:id/delete", hasUser(), async(req, res) =>{
  const stone = await getById(req.params.id);
 
  if(stone.owner != req.user._id) {
    return res.redirect("/auth/login");
  }

  await deleteById(req.params.id);
  res.redirect("/catalog");


})

router.get('/:id/edit', hasUser(), async (req, res) => {
  const stone = await getById(req.params.id);

  if (stone.owner.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  res.render('edit', {
    title: 'Edit',
    stone
  });
});

router.post('/:id/edit', hasUser(), async (req, res) => {
  const stone = await getById(req.params.id);


  if (stone.owner.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  try {
    await updateById(req.params.id, req.body);

    res.redirect(`/catalog`);

  } catch (error) {

    res.render('edit', {
      title: 'Edit',
      errors: parseError(error),
      stone: req.body
    });
  }
});



router.get("/:id/liked", hasUser(), async(req, res) => {
  const userId = req.user._id;
  const stoneId = req.params.id;
  const stone = await getById(stoneId);
  try {
    if(stone.owner.toString() != userId.toString() && stone.likedList.map((s) => s.toString()).includes(userId.toString()) == false) {
      await likesUser(stoneId, userId)
    }
    res.redirect(`/catalog/details/${stoneId}`)

  } catch(error) {
    const errors = parseError(error);

    res.render("detail", {
      title: "Request Error", 
      errors
    })
  }
})



module.exports = router;


