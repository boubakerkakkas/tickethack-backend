const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  hours: Date,
  price: Number,
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
