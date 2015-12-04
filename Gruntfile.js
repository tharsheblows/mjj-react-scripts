var envify = require('envify/custom');

module.exports = function( grunt ) {

	'use strict';
	var banner = '/**\n * <%= pkg.homepage %>\n * Copyright (c) <%= grunt.template.today("yyyy") %>\n * This file is generated automatically. Do not edit.\n */\n';
	// Project configuration
	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),

		browserify: {
      		dev: {
        		src: 'js/src/*.js',
        		dest: 'js/mjj-react-scripts.js',
        		options: {
          			browserifyOptions: {
            			standalone: 'MJJRS'
          			}
        		}
      		},
      		prod: {
      			src: 'js/src/*.js',
        		dest: 'js/mjj-react-scripts.js',
        		options: {
        			transform: [envify({
                    	NODE_ENV: 'production'
                  	})],
                  	browserifyOptions: {
            			standalone: 'MJJRS'
          			}
        		}
      		}
    	},
    	uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				expand: true,
				ext: '.min.js',
          		cwd: 'js',
				src: '*.js',
				dest: 'js'
			}
		},
		watch: {
			scripts: {
				files: ['js/src/*.js'],
				tasks: ['browserify:dev'],
				options: {
					debounceDelay: 500
				}
			}
		}
	} );


	grunt.loadNpmTasks( 'grunt-browserify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	grunt.registerTask( 'build', ['browserify:prod', 'uglify' ] );

	grunt.util.linefeed = '\n';

};
