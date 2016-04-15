/**
 * ProfesorController
 *
 * @description :: Server-side logic for managing profesors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	materias: function(res, req, next){
		Profesor.findOne({
			where: { user: req.session.passport.user}
		}).then( function(profesorencontrado){
			MateriaImpartida.find({
				where: {profesor: profesorencontrado.id}
			}).populate('materia').then( function(materiasencontradas){
				res.json(materiasencontradas);
			})
		})
	}
	
};

