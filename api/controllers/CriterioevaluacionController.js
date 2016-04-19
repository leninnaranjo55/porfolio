/**
 * CriterioEvaluacionController
 *
 * @description :: Server-side logic for managing criterioevaluacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	load: function(req, res, next) {
		Criterioevaluacion.findOne({
			where: { id: Number(req.params.criterioevaluacionId)}
		}).then(function(criterioevaluacion){
			if(criterioevaluacion) {
				req.criterioevaluacion = criterioevaluacion;
				next();
			} else { next(new Error('No existe el criterioevaluacion con el id ' + req.params.criterioevaluacionId));}
		}).catch(function(error){next(error);});
	},
	
	/*estandar: function(req, res, next) {

		Estandar.find({
			where: {criterioevaluacion: req.criterioevaluacion.id}
		}).then( function(estandares){
			res.json(estandares);
		})
	}*/

};

