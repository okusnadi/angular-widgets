'use strict'

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt)
    grunt.loadNpmTasks('grunt-contrib-jshint')

    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'lib/intro.js',
                    'lib/directives/*.js',
                    'lib/services/*.js',
                    'lib/controllers/*.js',
                    'lib/outro.js',
                ],
                dest: './dist/angular-widgets.js'
            }
        },
        uglify: {
            js: {
                src: ['./dist/angular-widgets.js'],
                dest: './dist/angular-widgets.min.js',
                options: {
                    sourceMap: true
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', 'lib/**/*.js']
        }
    })

    grunt.registerTask('default', [
        'concat',
        'uglify'
    ])
}