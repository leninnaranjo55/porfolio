// config/passport.js

var _ = require('lodash');
var _super = require('sails-permissions/config/passport');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
	passport: {
		google : {
		    name: 'Google',
		    protocol: 'oauth2',
		    strategy: require('passport-google-oauth').OAuth2Strategy,
		    options: {
		      clientID: '131188719376-jpstkosuf8q4mg6edagr66egb4qbjfig.apps.googleusercontent.com',
		      clientSecret: 'yJ5avX21-Ia6S-izbpk7tRz9',
		      scope: ['profile', 'email'],
		      hd: 'murciaeduca.es'
		    }
	  }
	}
});
