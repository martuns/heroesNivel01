const express = require('express');
const main = require('./routes/main');
const heroes = require('./routes/heroes');

const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3000, () => console.log('Server running in 3000 port'));



app.use('/', main);
app.use('/heroes', heroes);

app.get('*', (req, res) =>{
   res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
 });





