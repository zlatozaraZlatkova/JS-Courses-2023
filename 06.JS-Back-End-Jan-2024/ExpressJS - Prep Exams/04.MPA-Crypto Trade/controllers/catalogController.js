const router = require("express").Router();
const { getAll, createItem, getById, updateById, deleteById, buyItem, getSearchItem } = require("../services/catalogService");
const { hasUser } = require("../middlewares/guards");
const { parseError } = require("../utils/parser");

router.get("/", async (req, res) => {
  const coins = await getAll();
  res.render("catalog", {
    title: "Catalog Page",
    coins
  })
})

router.get("/create", hasUser(), async (req, res) => {
  const coins = await getAll();
  res.render("create", {
    title: "Create Page",
    coins

  })
})

router.post("/create", hasUser(), async (req, res) => {
  const userId = req.user._id;
  const coin = {
    name: req.body.name,
    imageURL: req.body.imageURL,
    price: Number(req.body.price),
    description: req.body.description,
    paymentMethod: req.body.paymentMethod,
    owner: req.user._id
  }

  try {

    if (Object.values(coin).some(v => !v)) {
      throw new Error("All fields are required!");
    }

    await createItem(userId, coin);

    res.redirect("/catalog");


  } catch (err) {
    const errors = parseError(err);

    res.render("create", {
      title: "Request Error",
      errors,
      body: coin

    })
  }

})

router.get("/details/:id", async (req, res) => {

  const coin = await getById(req.params.id);

  //BUY 
  if (req.user) {
    coin.isOwner = req.user._id.toString() === coin.owner.toString();

    //coin.isBought = coin.buyersList.map(c => c.toString()).includes(req.user._id);

    coin.isBought = coin.buyersList.some(user => user.equals(req.user._id));
  }

  res.render('details', {
    title: 'Details',
    coin
  });


})

router.get("/details/:id/edit", hasUser(), async (req, res) => {
  const coin = await getById(req.params.id);

  if (coin.owner.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login")
  }

  res.render("edit", {
    title: "Edit Page",
    coin
  })

})

router.post("/details/:id/edit", hasUser(), async (req, res) => {
  const coin = await getById(req.params.id);
  const coinId = req.params.id;

  if (coin.owner.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  try {
    //! important req.body 
    await updateById(coinId, req.body);
    res.redirect(`/catalog/details/${coinId}`)

  } catch (err) {
    const errors = parseError(err);
    res.render("edit", {
      title: "Request Error",
      errors,
      coin: req.body
    })
  }

})

router.get("/details/:id/delete", hasUser(), async (req, res) => {
  const coin = await getById(req.params.id);

  if (coin.owner.toString() !== req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  await deleteById(req.params.id, req.user._id);
  res.redirect("/catalog");


})

//BUY

router.get('/details/:id/buy', hasUser(), async (req, res) => {
  const coin = await getById(req.params.id);

  try {
    if (coin.owner.toString() !== req.user._id.toString() && coin.buyersList.map(b => b.toString()).includes(req.user._id.toString()) === false) {
      await buyItem(req.params.id, req.user._id);
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


//SEARCH

router.get("/search", async (req, res) => {
  const coins = await getSearchItem(req.query.search, req.query.paymentMethod);
  console.log(req.query)

  res.render("search", {
    title: "Search Page",
    coins
  })
})


module.exports = router;