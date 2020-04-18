const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroesController = {
    listado : function(req, res) {res.send(heroes)},
    
    detalle: function(req, res){
        let id =req.params.id; 	
		let heroe = heroes.find(h => h.id == id);
	if (heroe == undefined){
		res.send(`No se encuentra el heroe  ${id}`);
	} else {
		res.send(`Hola mi nombre es ${heroe.nombre} y soy ${heroe.profesion} `);
	};
	},
	bio :  function(req, res) {
	let heroe = heroes.find(h => h.id == req.params.id);
	let okEstatus = req.params.ok ;
	if (heroe == undefined){
		res.send(`No encontramos un héroe para mostrarte su biografía`);
	} if (okEstatus == undefined) {
		res.send(`Mi nombre es ${heroe.nombre}. Lamento que no desees saber más de mi :(`);
	}
	else {
		res.send(`Nombre del Heroe: ${heroe.nombre}  \n\n\<br/>Breve reseña: ${heroe.resenia} `);
	}
	},
    

};

module.exports = heroesController;
	


