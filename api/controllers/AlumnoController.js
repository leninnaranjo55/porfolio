/**
 * AlumnoController
 *
 * @description :: Server-side logic for managing alumnoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	load: function(req, res, next){
		Alumno.findOne({
			where: { user: req.session.passport.user}
		}).then( function(alumnoencontrado){
			if(alumnoencontrado) {
				req.alumno = alumnoencontrado;
				next()
			} else {
				next(new Error("No es alumno"));
			}

		})
	} 

};

