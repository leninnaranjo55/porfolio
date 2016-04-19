/**
 * ContenidoController
 *
 * @description :: Server-side logic for managing contenidoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	load: function(req, res, next) {
		Contenido.findOne({
			where: { id: Number(req.params.contenidoId)}
		}).then(function(contenido){
			if(contenido) {
				req.contenido = contenido;
				next();
			} else { next(new Error('No existe el contenido con el id ' + req.params.contenidoId));}
		}).catch(function(error){next(error);});
	},


	/*criterio: function(req, res, next) {

		Criterioevaluacion.find({
			where: {id: req.contenido.id}
		}).then( function(criterios){
			res.json(criterios);
		})
	}*/

	
};

