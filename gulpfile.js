'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

let typescript;
let projectTS;
let tsProject;
let sourcemaps;
gulp.task('build:typescript', () => {
  if (!typescript) {
    typescript = require('gulp-typescript');
    projectTS = require('typescript');
    sourcemaps = require('gulp-sourcemaps');
  }
  if (!tsProject) {
    tsProject = typescript.createProject('tsconfig-main.json', {rootDir: 'src', typescript: projectTS});
  }
  let tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write({includeContent: true, sourceRoot: 'src/', destPath: 'build'}))
    .pipe(gulp.dest('build'));
});

var tsProjectTests;
gulp.task('build:typescript:tests', () => {
  if (!typescript) {
    typescript = require('gulp-typescript');
    projectTS = require('typescript');
    sourcemaps = require('gulp-sourcemaps');
  }
  if (!tsProjectTests) {
    tsProjectTests = typescript.createProject('tsconfig-tests.json', {rootDir: 'src', typescript: projectTS});
  }
  var tsResult = tsProjectTests.src()
    .pipe(sourcemaps.init())
    .pipe(tsProjectTests());

  return tsResult.js
    .pipe(sourcemaps.write({includeContent: true, sourceRoot: 'src/', destPath: 'build'}))
    .pipe(gulp.dest('build'));
});

gulp.task('build:tests', ['build:typescript:tests']);

gulp.task('build:dev', ['build:typescript', 'build:tests']);

let del;
gulp.task('clean', () => {
  if (!del) {
    del = require('del');
  }
  return del(['build']);
});

gulp.task('watch', () => {
  gulp.watch(['src/**/*.ts'], ['build:typescript']);
});

let mocha;
gulp.task('test', () => {
  if (!mocha) {
    mocha = require('gulp-mocha');
  }
  return gulp.src(['build/**/tests/*.js'], {read: false})
    // .pipe(env)
    .pipe(mocha());
  // .pipe(env.restore());
});

let tsLint;
gulp.task('lint', () => {
  if (!tsLint) {
    tsLint = require('gulp-tslint');
  }
  gulp.src('src/**/*.ts')
    .pipe(tsLint())
    .pipe(tsLint.report());
});

let Foreman;
gulp.task('run', () => {
  if (!Foreman) {
    Foreman = require('gulp-nf').Foreman;
  }
  Foreman({
    cwd: `${process.cwd()}/`,
    procFile: `${process.cwd()}/Procfile`,
    envFile: `${process.cwd()}/.env`
  });
});

gulp.task('set-dev', () => {
  process.env.DEVELOPMENT = true;
});

gulp.task('build', (callback) => {
  runSequence('clean', ['build:typescript'], callback);
});

gulp.task('dev', (callback) => {
  runSequence('set-dev', 'build:dev', 'run', 'watch:dev', callback);
});

gulp.task('default', ['build']);
