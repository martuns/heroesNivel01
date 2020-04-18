const express = require('express');

const fs = require('fs');

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));


/* 
// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
		//let heroe = heroes.find(id=>id==id);
	
	let heroe = heroes.find(h => h.id == req.params.id);
	if (heroe == undefined){
		res.send(`No se encuentra el heroe  ${req.params.id}`);
	} else {
		res.send(`Hola mi nombre es ${heroe.nombre} y soy ${heroe.profesion} `);
	}
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	
	let heroe = heroes.find(h => h.id == req.params.id);
	let okEstatus = req.params.ok ;
	if (heroe == undefined){
		res.send(`No encontramos un héroe para mostrarte su biografía`);
	} if (okEstatus == undefined) {
		res.send(`Mi nombre es ${heroe.nombre}. Lamento que no desees saber más de mi :(`);
	}
	else {
		res.send(`Mi nombre es ${heroe.nombre} y los libros dicen que: \n\n\<br/>${heroe.resenia} `);
	}
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	
}); */

module.exports = {
    heroes
};

