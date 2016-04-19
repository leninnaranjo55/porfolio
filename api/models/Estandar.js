/**
* Estandares.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	numero : { type: 'int', size: 45, required: true },

  	texto : { type: 'text'},

  
  	autoevaluaciones: {
  		collection: 'autoevalua',
  		via: 'estandares'
  	},

  	propuestos: {
  		collection: 'profesor',
  		via: 'estandares'
  	},

  	criterioevaluacion: { model: 'criterioevaluacion'}


  }
};

