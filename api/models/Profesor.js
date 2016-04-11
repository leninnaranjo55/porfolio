/**
* Profesor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	apellidos: { type: 'string', size: 19 },

	nombre: { type: 'string', size: 19 },

	email: { type: 'string', size: 100 },

	
	materias: {
		collection: 'materiaImpartida', 
		via: 'profesor' 
	},

	estandares: {
		collection: 'estandar',
		via: 'profesores'
	}

  }
};

