const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  hours: Date,
  price: Number,
  departureTime: String 
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;
