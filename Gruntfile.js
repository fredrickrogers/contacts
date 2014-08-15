module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			src: ['Gruntfile.js', 'app.js', 'app/models/**/*.js', 'app/routes/**/*.js', 'public/javascripts/**/*.js', '!public/vendor/**/*.js'],
		},

		copy: {
			build: {
				cwd: 'app',
				src: ['models/**/*.js', 'public/**/*', 'routes/**/*.js'],
				dest: 'build',
				expand: true
			},
			dest: {
				cwd: 'public',
				src: ['public/index.html'],
				dest: 'dest',
				expand:true
			}
		},

		clean: {
			build: {
				src: ['build', 'dest']
			},
		},

		cssmin: {
			build: {
				options: {
					banner: '/* My minified css file */'
				},
				files: {
					'dest/css/application.css' : [
						'build/public/stylesheets/bootstrap.min.css', 
						'build/public/sytlesheets/bootstrap-theme.min.css', 
						'build/public/stylesheets/styles.css']
				}
			}
		},

		uglify: {
			build: {
				options: {
					mangle: false
				},
				files: {
					'dest/js/application.js': ['build/public/**/*.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', 'jshint');

	grunt.registerTask('build',
		'Compiles all of the assets and copies the files to the build directory.',
		['clean', 'copy', 'stylesheets', 'scripts']);

	grunt.registerTask('stylesheets',
		'Compiles the stylesheets',
		['cssmin']);

	grunt.registerTask('scripts',
		'Compiles the Javascript files',
		['uglify']
	);
};