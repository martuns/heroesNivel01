const express = require('express');
const router = express.Router();

const heroesController = require('../controllers/heroesController');
const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));




router.get('/', heroesController.listado);
router.get('/detalle/:id', heroesController.detalle);
router.get('/bio/:id/:ok?', heroesController.bio);




module.exports = router;