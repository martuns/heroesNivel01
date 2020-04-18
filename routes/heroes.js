const express = require('express');
const router = express.Router();

const heroesController = require('../controllers/heroesController');



router.get('/', (req, res) =>{
    res.send(heroesController.heroes);
});

module.exports = router;