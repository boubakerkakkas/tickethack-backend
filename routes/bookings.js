var express = require('express');
var router = express.Router();

const Bookings = require('../models/bookings');
const Carts = require('../models/carts');


// Obtention du trajet sélectionné pour la réservation

router.post('/add', function (req,res){
  const { ObjectId } = req.query;

Carts.findById(ObjectId)
.then(data => {
  if (data) {
      Bookings.findOne({ departure: data.departure, arrival: data.arrival, price: data.price })
      .then(searchedOne => {
          console.log(searchedOne)
          if (searchedOne === null){
              const newBookings = new Bookings({
                  departure: data.departure,
                  arrival: data.arrival,
                  date: data.date,
                  price: data.price,
                })
                newBookings.save()
                .then(booking => {
                  res.json({ result: true , message: 'Trip added to cart', booking});
                })
                .catch(error => {
                  res.json({ result: false, error: error.message });
                });
          } else {
              res.json({ result: false, message: 'Trip already saved' });
          }
      })
      .catch(error => {
        res.json({ result: false, error: error.message });
      });

  } else { 
    res.json({ result: false, error: 'Trip not found' });
  }
})
.catch(error => {
  res.json({ result: false, error: error.message });
})
});


module.exports = router;
