/**
 * Materia+Controller
 *
 * @description :: Server-side logic for managing materia+s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	load: function(req, res, next) {
		Materia.findOne({
			where: { id: Number(req.params.materiaId)}
		}).then(function(materia){
			if(materia) {
				req.materia = materia;
				next();
			} else { next(new Error('No existe la materia con el id ' + req.params.materiaId));}
		}).catch(function(error){next(error);});
	},



	contenido: function(req, res, next){

		var arraycontenidos = [];

		Bloque.find({
			where: { materia: req.materia.id}
			}).populate('contenidos').then( function(bloques){
				bloques.forEach(function(onebloque){
					onebloque.contenidos.forEach( function(contenido){
						arraycontenidos.push(contenido);
					})
					
				})
				res.json(arraycontenidos);
			})
		

	},

	estandares: function(req, res, next){

		var arrayestandar = [];
		// var estandarpropuesto = [];
		
		
		sails.log.verbose(req.profesores);


		Criterioevaluacion.find({
			where : {materia: req.materia.id}
		}).populate('estandares').then( function(criterios){
			criterios.forEach( function(onecriterio){
				onecriterio.estandares.forEach( function(unestandar){
					arrayestandar.push(unestandar.id);
				})

			});
			sails.log.verbose(arrayestandar);sails.log.verbose(req.alumno);

					// Estandar.find({
					// 	where : {id: arrayestandar}
					// }).populate('propuestos', {where: {id: req.profesores}}).then( function(estandares){
					// 	estandares.forEach( function(estandar){
					// 		if(estandar.propuestos.length > 0){
					// 			estandarpropuesto.push(estandar);
					// 	}
					// 	})
						
					// 	res.json(estandarpropuesto);
					// 	});


					Propuesto.find({
						where : {estandar: arrayestandar, profesor: req.profesores, grupo: req.alumno.grupos[0].id}
					}).populate('estandar').then( function(estandares){
						Autoevalua.find({
							where: {alumno: req.alumno.id}
						}).then( function(evaluados){
							//res.json(evaluados);
							estandares.forEach(function(estandar){
								evaluados.forEach(function(evaluado){
									if(estandar.estandar.id == evaluado.estandares)
									{
										estandar.evaluado = evaluado.valor;
									}
								});
							});
							res.json(estandares);
   						 });

						//
						});




			//res.json(arrayestandar);
			//req.estandares = arrayestandar;
			});

		
		
	},

	mismaterias: function(req, res, next){

		var promesas = [];
		var arraymat = [];

		if(req.session.role == 'profesor'){
			promesas.push(MateriaImpartida.find({
					where: {profesor: req.persona.id}
				}).populate('materia'));

		}else if(req.session.role == 'alumno'){

			promesas.push(MateriaMatriculada.find({
            	where : { expediente: req.persona.id}
       			}).populate('materia'));
		}

		Promise.all(promesas).then ( function(listaMateria){
            listaMateria[0].forEach( function(unamateria){
                arraymat.push(unamateria.materia);
            })
            		res.json(arraymat);
            })

	},

	media: function(req, res, next){

	Alumno.findOne({
			where: { user: req.session.passport.user}
		}).then( function(alumnoencontrado){
			if(alumnoencontrado) {
				//req.alumno = alumnoencontrado;
				//next()
				var arrayestandar = [];
				
				Criterioevaluacion.find({
					where : {materia: req.materia.id}
				}).populate('estandares').then( function(criterios){
					criterios.forEach( function(onecriterio){
						onecriterio.estandares.forEach( function(unestandar){
							arrayestandar.push(unestandar.id);
						})
					});

					Autoevalua.find({
							where: {estandares: arrayestandar, alumno: alumnoencontrado.id}
						}).then( function(evaluados){
							evaluados.forEach( function(evaludo){
								var suma=0;
								

							})
							res.json(evaluados);
					 });




				});
				sails.log.verbose(alumnoencontrado);
				sails.log.verbose(arrayestandar);

						

				


			} else {
				next(new Error("No es alumno"));
			}

		})
	}
};

