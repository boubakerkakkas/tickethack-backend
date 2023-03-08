var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');
const Cart = require('../models/carts');


// Obtention du trajet sélectionné pour la réservation
router.get('/', (req, res) => {
  const { ObjectId } = req.query;
  Booking.findOne({ ObjectId })
    .then(booking => {
      res.json({ booking });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
});



module.exports = router;
