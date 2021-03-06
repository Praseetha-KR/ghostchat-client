/*global module:false*/
'use strict';
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9901,
                    base: 'app'
                }
            }
        },
        less: {
            development: {
                files: {
                    'app/css/main.css': 'app/less/main.less'
                }
            },
            production: {
                options: {
                    cleancss: true,
                },
                files: {
                    'app/css/main.css': 'app/less/main.less'
                }
            }
        },
        watch: {
            html: {
                files: ['**/*.html', '!app/bower_components/**/*.html', '!npm_modules/**/*.html'],
                options: {
                    livereload: true,
                }
            },
            less: {
                files: ['app/less/**/*.less'],
                tasks: ['less:development']
            },
            js: {
                files: ['app/js/**/*.js'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['app/css/**/*.css'],
                options: {
                    livereload: true,
                }
            },
            configFiles: {
                files: ['Gruntfile.js', 'config/*.js'],
                options: {
                    reload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:development', 'connect', 'watch']);
    grunt.registerTask('test', []);
    grunt.registerTask('prod', ['less:production']);
};