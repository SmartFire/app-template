import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', function() {
  runSequence('test:once', 'clean', 'copy');
});
