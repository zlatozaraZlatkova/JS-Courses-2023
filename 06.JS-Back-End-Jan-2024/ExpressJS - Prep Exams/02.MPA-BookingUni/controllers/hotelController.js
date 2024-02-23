const router = require("express").Router();

const { getById, create, editById, deleteById, bookRoom } = require("../services/hotelServices");

const { parseError } = require("../utils/parser");

router.get("/:id/details", async (req, res) => {
  const hotel = await getById(req.params.id);
  const isBooked = hotel.bookings
    .map((b) => b.toString())
    .includes(req.user._id.toString());

  if (hotel.owner == req.user._id) {
    hotel.isOwner = true;
  }
  console.log(isBooked);
  if (isBooked != false) {
    hotel.enrolled = true;
  }

  res.render("details", {
    title: "Hotel Details",
    hotel,
  });
});


router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Hotel",
  });
});

router.post("/create", async (req, res) => {
  const hotel = {
    name: req.body.name,
    city: req.body.city,
    imgUrl: req.body.imgUrl,
    rooms: Number(req.body.rooms),
    owner: req.user._id,
  };

  try {

    if (Object.values(hotel).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await create(hotel);

    res.redirect("/");
  } catch (err) {
    res.render("create", {
      title: "Request Error",
      body: hotel,
      errors: parseError(err),
    });
  }
});



router.get("/:id/edit", async (req, res) => {
  const hotel = await getById(req.params.id);

  if (hotel.owner != req.user._id) {
    return res.redirect("auth/login");
  }

  res.render("edit", {
    title: "Edit Hotel",
    hotel,
  });
});

router.post("/:id/edit", async (req, res) => {
  const hotelId = req.params.id;
  const hotel = await getById(hotelId);

  if (hotel.owner != req.user._id) {
    return res.redirect("auth/login");
  }

  const edited = {
    name: req.body.name,
    city: req.body.city,
    imgUrl: req.body.imgUrl,
    rooms: Number(req.body.rooms),
  };

  try {
    if (Object.values(edited).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await editById(hotelId, edited);
    res.redirect(`/hotel/${hotelId}/details`);
  } catch (err) {
    res.render("edit", {
      title: "Edit Hotel",
      hotel: Object.assign(edited, { _id: hotelId }),
      errors: parseError(err),
    });
  }
});


router.get("/:id/delete", async (req, res) => {

  const hotel = await getById(req.params.id);


  if (hotel.owner != req.user._id) {

    return res.redirect("/auth/login");
  }


  await deleteById(req.params.id);

  res.redirect("/");
});


router.get("/:id/book", async (req, res) => {
  const hotelId = req.params.id;
  const hotel = await getById(hotelId);

  try {
    if (hotel.owner == req.user._id) {
      hotel.isOwner = true;
      throw new Error("Cannot book your own hotel");
    }

    if (
      hotel.bookings.map((b) => b.toString()).includes(req.user._id.toString())
    ) {
      hotel.isBooked = true;
      throw new Error("Cannot book twice");
    }

    await bookRoom(hotelId, req.user._id);
    res.redirect(`/hotel/${hotelId}/details`);
  } catch (error) {
    res.render("details", {
      title: "Hotel Details",
      hotel,
      errors: parseError(error),
    });
  }
});

module.exports = router;
