/**
* Bloque.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	numero : { type: 'int', size: 1, required: true  },

  	descripcion : { type: 'text'},

  	materia: { model: 'Materia'},

  	contenidos: { 
  		collection: 'contenido',
  		via: 'bloque'
  	}

  }
};

