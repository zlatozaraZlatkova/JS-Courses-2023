const router = require("express").Router();
const { hasUser } = require("../middlewares/guards");
const { getByUserBooking } = require("../services/hotelServices")

router.get("/", hasUser(), async(req, res) => {
  const bookings = await getByUserBooking(req.user._id);
  const data = Array(bookings.map(h => h.name)).join(" ").split(", "); 

  res.render("profile", {
    title: "Profile Page", 
    
    user: Object.assign( { bookings: data }, req.user)
  
   
  })

})

module.exports = router;
