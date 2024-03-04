const router = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const { getAll, createItem, getById, updateItem, deleteItem, getByUserId } = require('../services/itemService');
const { parseError } = require('../utils/parser');

//GET
router.get("/catalog", async (req, res) => {
  //console.log(req.user)
  let items = [];

  //!query req.query.where === ownerId="3736237623762af"
  if (req.query.where) {
    const userId = JSON.parse(req.query.where.split("=")[1]);
    //console.log(userId)
    items = await getByUserId(userId);

  } else {
    items = await getAll();
  }

  res.json(items)
});

//POST
router.post("/catalog", hasUser(), async (req, res) => {
  //console.log(req.body);
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
    const item = await createItem(data);

    res.json(item);

  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });

  }
  res.end();
})


router.get("/catalog/:id", async (req, res, next) => {
  const item = await getById(req.params.id);
  res.json(item);

})

//EDIT 
router.put("/catalog/:id", hasUser(), async (req, res, next) => {

  const item = await getById(req.params.id);

  if (req.user._id != item._ownerId) {
    return res.status(403).json({ message: 'You cannot modify this record' });
  }

  try {
    const result = await updateItem(req.params.id, req.body);
    res.json(result);

  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

//DELETE
router.delete('/catalog/:id', hasUser(), async (req, res) => {
  const item = await getById(req.params.id);
  if (req.user._id != item._ownerId) {
    return res.status(403).json({ message: 'You cannot modify this record' });
  }

  try {
    await deleteItem(req.params.id);
    res.status(204).end();
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});



module.exports = router;

