var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');
  

// Recherche de trajets en fonction du départ, de l'arrivée et de la date
router.get('/', (req, res) => {
  const { departure, arrival, date } = req.query;
  const searchParams = {};

  if (departure) {
    searchParams.departure = departure;
  }
  if (arrival) {
    searchParams.arrival = arrival;
  }
  if (date) {
    const localDate = new Date(date);
    const utcDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000);
    // convertit la date locale en UTC
    searchParams.date = { $gte: utcDate, $lt: new Date(utcDate.getTime() + 24 * 60 * 60 * 1000) };
    // recherche les voyages pour toute la journée spécifiée dans le fuseau horaire local
  }

  Trip.find(searchParams)
    .then(trips => {
      res.json({ trips });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
});


module.exports = router