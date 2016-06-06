/**
* Materia+.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  		codigo: { type: 'string', size: 6, unique: true, primaryKey: true },

		materia: { type: 'string', size: 100 },

		ensenanza: { type: 'string', size: 100 },

		curso: { type: 'string', size: 1 },

		materiasMatriculadas: { 
			collection: 'MateriaMatriculada', 
			via: 'materia' 
		},

		materiasImpartidas: { 
			collection: 'MateriaImpartida', 
			via: 'materia' 
		},

		bloques: {
			collection: 'bloque',
			via: 'materia'
		},
		criterios: {
			collection: 'criterioEvaluacion',
			via: 'materia'
		},


		PuntuacionMaxima: function(cb){

			var arrayestandar = [];
			var maximo = 0;
		
			Criterioevaluacion.find({
					where : {materia: this.id}
				}).populate('estandares').then( function(criterios){
					criterios.forEach( function(onecriterio){
						onecriterio.estandares.forEach( function(unestandar){
							arrayestandar.push(unestandar.id);

						});
						maximo= arrayestandar.length *10;
						sails.log.verbose(maximo);					
					});
					cb(maximo);				
				});
		},


		MediaAlumno: function(alumnoid, cb){
			var arrayestandar = [];
		
			Criterioevaluacion.find({
					where : {materia: this.id}
				}).populate('estandares').then( function(criterios){
					criterios.forEach( function(onecriterio){
						onecriterio.estandares.forEach( function(unestandar){
							arrayestandar.push(unestandar.id);
						})
						
					});

					Autoevalua.find({
							where: {estandares: arrayestandar, alumno: alumnoid}
						}).average('valor').then(cb);
				});


/*
				var arrayestandar = [];
				var suma=0;
				var total=0;

				
				Criterioevaluacion.find({
					where : {materia: this.id}
				}).populate('estandares').then( function(criterios){
					criterios.forEach( function(onecriterio){
						onecriterio.estandares.forEach( function(unestandar){
							arrayestandar.push(unestandar.id);
						})
					});

					Autoevalua.find({
							where: {estandares: arrayestandar, alumno: alumnoid}
						}).then( function(evaluados){

							var div= evaluados.length;
							sails.log.verbose(div);

							evaluados.forEach( function(evaluado){

								var num= parseInt(evaluado.valor);

								suma+= num;
								

							})
							total=suma/div;
							cb(total);
					 });




				});*/
								


		}

  }
};

