/**
 * EstandaresController
 *
 * @description :: Server-side logic for managing estandares
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	load: function(req, res, next) {
		Estandar.findOne({
			where: { id: Number(req.params.estandarId)}
		}).then(function(estandar){
			if(estandar) {
				req.estandar = estandar;
				next();
			} else { next(new Error('No existe el estandar con el id ' + req.params.estandarId));}
		}).catch(function(error){next(error);});
	},
	
	propuesto: function(req, res, next) {
		req.estandar.profesores.add(req.profesor);
		req.estandar.save(function(err, estandar){
			res.json(estandar);
		});
		
	},

	getListado: function(req, res, next) {
	
		req.alumno.misprofesores(function(profesores){
			req.profesores= profesores;
			next();

		});
	
	},


	evaluar: function(req, res, next) {

		var valoracion = req.body.puntuacion;

		Autoevalua.create({estandares: req.estandar, alumno: req.alumno, valor: valoracion}).exec(function createCB(err, created){
  				res.send('Estandar ' + created.estandares + ' Alumno ' + created.alumno + ' Valor ' + created.valor);

				});

	}


};

