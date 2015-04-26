(function() {
  'use strict';
  var gulp = require('gulp');
  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var git = require('gulp-git');

  gulp.task('git-status', function() {
    git.status(function(err) {
      if (err) {
        throw err;
      }
    });
  });

  gulp.task('jshint',
            function() {
              return gulp
                .src(['*.js', '!jakefile.js'])
                .pipe(jshint())
                .pipe(jshint.reporter(stylish))
                .pipe(jshint.reporter('fail'));
            });

  gulp.task('test', function() {
    console.log('test goes here');
  });

  gulp.task('default', ['git-status', 'test', 'jshint'], function() {
    console.log('1. Make sure "git status" is clean.');
    console.log('2. Build on the integration box.');
    console.log('   a. Walk over to integration box.');
    console.log('   b. "git pull"');
    console.log('   c. "gulp"');
    console.log('   d. If gulp fails, start over!');
    console.log('3. git checkout integration');
    console.log('4. git merge master');
    console.log('5. git checkout master');

  });
})();

