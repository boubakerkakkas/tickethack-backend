var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');


// TRAJETS

// GET /trips : récupérer tous les trajets

router.get('/trips', async (req, res) => {
    const { departure, arrival, date } = req.query;
    const trips = await Trip.findAll({
      where: {
        departure,
        arrival,
        date: moment(date).format('YYYY-MM-DD')
      }
    });
    res.json(trips);
  });
  
// GET /trips/:id : récupérer un trajet par son identifiant
// POST /trips : créer un nouveau trajet
// PUT /trips/:id : mettre à jour un trajet existant par son identifiant
// DELETE /trips/:id : supprimer un trajet par son identifiant

module.exports = mongoose.model('trips', trajetSchema);