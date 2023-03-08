var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');
const Trips = require('../models/trips');
const Booking = require('../models/bookings');

//route POST to create a new trip in cart when the book button is clicked on

router.post('/add', function (req,res){
  const { ObjectId } = req.query;

  Trips.findById(ObjectId)
    .then(data => {
      if (data) {
          Cart.findOne({ departure: data.departure, arrival: data.arrival, price: data.price })
          .then(searchedOne => {
              console.log(searchedOne)
              if (searchedOne === null){
                  const newCart = new Cart({
                      departure: data.departure,
                      arrival: data.arrival,
                      date: data.date,
                      price: data.price,
                    })
                    newCart.save()
                    .then(cart => {
                      res.json({ result: true , message: 'Trip added to cart', cart});
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
    });
});

// Suppression du trajet sélectionné dans le panier
router.delete('/remove', function (req,res){
  const { ObjectId } = req.query;

  Cart.findByIdAndDelete(ObjectId)
    .then(data => {
      if (data) {
        res.json({ result: true , message: 'Trip removed from cart' });
      } else { 
        res.json({ result: false, error: 'Trip not found' });
      }
    })
    .catch(error => {
      res.json({ result: false, error: error.message });
    });
});


module.exports = router;
