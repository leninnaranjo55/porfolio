/**
* Alumno.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    apellido1 : { type: 'string', size: 45 },

    apellido2 : { type: 'string', size: 45 },

    nombre : { type: 'string', size: 45 },

    email : { type: 'string', email: true, size: 45},

    fechaNac : {type: 'date'},
   
    grupos: {
        collection : 'grupo',
        via : 'alumnos'
    },

    autoevaluaciones: {
    	collection: 'autoevalua',
    	via: 'alumno'
    }

  }
};

