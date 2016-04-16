const gulp = require('gulp');
const babel = require('gulp-babel');
const rollup = require('rollup').rollup;
const del = require('del');

gulp.task('bundle-es6', () => {
  return rollup({
    entry: 'src/index.js',
    external: [
      'react',
      'redux',
    ],
  }).then(bundle => {
    bundle.write({
      dest: 'tmp/bundle.js',
      format: 'cjs',
    });
  });
});

gulp.task('babelify-bundle', ['bundle-es6'], () => {
  return gulp.src('tmp/bundle.js')
    .pipe(babel({
      presets: ['es2015', 'react'],
    }))
    .pipe(gulp.dest('public/build/'));
});

gulp.task('clean:bundle', ['babelify-bundle'], () => {
  return del(['tmp/**']);
});

gulp.task('bundle', ['clean:bundle']);
