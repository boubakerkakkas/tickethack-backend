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
            Cart.findOne(data)
            .then(searchedOne => {
                console.log(searchedOne)
                if (searchedOne === null){
                    const newCart = new Cart({
                        departure: data.departure,
                        arrival: data.arrival,
                        //date: data.date,
                        price: data.price,
                      })
                      newCart.save()
                      .then(cart => {
                        res.json({ result: true , message: 'Trip added to cart', cart});
                      })
                      .catch(error => {
                        res.json({ result: false, error: error.message });
                      });
                }
            })

        } else { 
          res.json({ result: false, error: 'Trip not found' });
        }
      })
      .catch(error => {
        res.json({ result: false, error: error.message });
      });
  });

// Obtention du trajet sélectionné dans le panier
router.get('/', (req, res) => {
  const { _id } = req.query;
  Cart.find({ _id })
    .then(cart => {
      res.json({ cart });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
});


// Suppression du trajet sélectionné dans le panier
router.delete('/', (req, res) => {
  const { _id } = req.query;
  Cart.deleteOne({ _id })
    .then(cart => {
      res.json({ message: 'Trip removed from cart' });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
});


module.exports = router;
