const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const trajetSchema = new Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number
});

module.exports = mongoose.model('Trajet', trajetSchema);
