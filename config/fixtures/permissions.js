// config/fixtures/permissions.js

var Promise = require('bluebird');


exports.create = function () {
	var arrayModelosProfesor = ['Bloque','Contenido','Criterioevaluacion','Estandar','Propone', 'Profesor'];
	var arrayModelosAlumnos = ['Propone','Estandar','Criterioevaluacion','Autoevalua'];
	var promesas = [];
	arrayModelosProfesor.forEach(function(modeloP){
			    promesas.push({ role: 'profesor', model: modeloP, action: 'read'});
			    promesas.push({ role: 'profesor', model: modeloP, action: 'create'});
			    promesas.push({ role: 'profesor', model: modeloP, action: 'update'});
			    promesas.push({ role: 'profesor', model: modeloP, action: 'delete', relation: 'owner'});
	});
				 promesas.push({ role: 'profesor', model: 'Materia', action: 'read'});

	arrayModelosAlumnos.forEach(function(modeloA){
				promesas.push({ role: 'alumno', model: modeloA, action: 'read'}); 
	});

				promesas.push({ role: 'alumno', model: 'Autoevalua', action: 'create'}); 
				promesas.push({ role: 'alumno', model: 'Autoevalua', action: 'update'});
				promesas.push({ role: 'alumno', model:'Autoevalua' , action: 'delete', relation: 'owner'}); 

	  return Promise.all([
	    Role.findOrCreate({ name: 'profesor' }, { name: 'profesor' }),
	    Role.findOrCreate({ name: 'alumno' }, { name: 'alumno' })
	  ]).then(function(role){
	  		return Promise.all([PermissionService.grant(promesas)])/*[

			    PermissionService.grant({ role: 'profesor', model: 'Bloque', action: 'read'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Bloque', action: 'create'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Bloque', action: 'delete', relation: 'owner'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Bloque', action: 'update'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Contenido', action: 'read'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Contenido', action: 'create'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Contenido', action: 'delete', relation: 'owner'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Contenido', action: 'update'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Criterioevaluacion', action: 'read'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Criterioevaluacion', action: 'create'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Criterioevaluacion', action: 'delete', relation: 'owner'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Criterioevaluacion', action: 'update'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Estandar', action: 'read'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Estandar', action: 'create'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Estandar', action: 'delete', relation: 'owner'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Estandar', action: 'update'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Propone', action: 'read'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Propone', action: 'create'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Propone', action: 'delete', relation: 'owner'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Propone', action: 'update'}), 

			    PermissionService.grant({ role: 'alumno', model: 'Propone', action: 'read'}), 
			    PermissionService.grant({ role: 'alumno', model: 'Estandar', action: 'read'}), 
			    PermissionService.grant({ role: 'alumno', model: 'Criterioevaluacion', action: 'read'}), 
			    PermissionService.grant({ role: 'alumno', model: 'Autoevalua', action: 'read'}), 
			    PermissionService.grant({ role: 'alumno', model: 'Autoevalua', action: 'create'}), 
			    PermissionService.grant({ role: 'alumno', model: 'Autoevalua', action: 'delete', relation: 'owner'}), 
			    PermissionService.grant({ role: 'alumno', model: 'Autoevalua', action: 'update'})
		  ])*/
	  })
};