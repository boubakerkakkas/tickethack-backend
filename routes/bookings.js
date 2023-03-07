var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');


// RESERVATIONS

// GET /bookings : récupérer toutes les réservations
// GET /bookings/:id : récupérer une réservation par son identifiant
// POST /bookings : créer une nouvelle réservation
// DELETE /bookings/:id : supprimer une réservation par son identifiant

module.exports = router;
