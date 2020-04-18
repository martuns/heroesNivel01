
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const heroesController = require('../controllers/heroesController');


router.get('/', (req, res) =>{
    res.send(mainController.homePage);
});

router.get('/creditos', (req, res) =>{
    res.send(mainController.creditos);
});

//router.get('*', (req, res) =>{
   //res.status(404).send(mainController.status404);;
//});



module.exports = router;
