'use strict';

var path        = require('path');
var gulp        = require('gulp');
var conf        = require('./conf');
var fs          = require('fs');
var args        = require('yargs').argv;
var browserSync = require('browser-sync');
var $           = require('gulp-load-plugins')();
var _           = require('lodash');

var env = args.env || 'development';
// Read the settings from the right file
var filename = env + '.json';

var settings    = JSON.parse(fs.readFileSync(path.join(conf.paths.src, conf.paths.config, filename), 'utf8'));
var packageInfo = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// adding version to settings
_.assign(settings, { version: packageInfo.version });

var tsProject = $.typescript.createProject({
  sortOutput: true
});

gulp.task('scripts', ['tsd:install'], function () {

  return gulp.src(path.join(conf.paths.src, '/app/**/*.ts'))
    // This replaces string `$$settings` with the environment variables described in /config folders
    .pipe($.replace('$$settings', JSON.stringify(settings)))
    .pipe($.sourcemaps.init())

    .pipe($.tslint())
    .pipe($.tslint.report('prose', { emitError: false }))
    .pipe($.typescript(tsProject)).on('error', conf.errorHandler('TypeScript'))
    .pipe($.concat('index.module.js'))

    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')))

    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size());
});

