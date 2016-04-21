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
		req.estandar.propuestos.add(req.profesorId);
		req.estandar.save(function(err, estandar){
			res.json(estandar);
		});
		
	},

	getListado: function(req, res, next) {
	
		req.alumno.misprofesores(function(profesores){
			res.json(profesores);

		});
		

		
	},
};

