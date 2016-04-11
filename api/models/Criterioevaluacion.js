/**
* CriterioEvaluacion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

	numero : { type: 'int', size: 1, required: true },

  	texto : { type: 'string', size: 255, required: true },

  	materia: {model: 'materia'},

  	estandares: {
  		collection: 'estandar',
  		via: 'criterioevaluacion'
  	},

  	contenidos: {
  		collection: 'contenido',
  		via: 'criterios'
  	}


  }
};

