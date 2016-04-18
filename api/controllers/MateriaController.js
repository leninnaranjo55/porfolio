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
		

	}
	
};

