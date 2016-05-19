/**
 * ProfesorController
 *
 * @description :: Server-side logic for managing profesors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

/*	materias: function(req, res, next){
		sails.log.verbose(req.persona);
			MateriaImpartida.find({
				where: {profesor: req.persona.id}
			}).populate('materia').then( function(materiasencontradas){
				res.json(materiasencontradas);
			})
	},*/

	load: function(req, res, next){
		Profesor.findOne({
			where: { user: req.session.passport.user}
		}).then( function(profesorencontrado){
			if(profesorencontrado) {
				req.profesor = profesorencontrado;
				next()
			} else {
				next(new Error("No es profesor"));
			}

		})
	},

	AlumnoGrupo: function(req, res, next) {		

		Alumno.find({
			where: {grupos: [req.grupo]}
		}).then( function(alumnos){
			req.alumnos= alumnos;
		})
	},

	AlumnoEstandar: function(req, res, next) {

		Criterioevaluacion.findOne({
			where: {estandares: req.estandar.Criterioevaluacion}
		}).then( function(micriterio){

		})


	
}

}