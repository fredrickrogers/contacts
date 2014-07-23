module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			src: ['Gruntfile.js', 'app.js', 'models/**/*.js', 'routes/**/*.js', 'public/javascripts/**/*.js', '!public/vendor/**/*.js'],
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', 'jshint');
};