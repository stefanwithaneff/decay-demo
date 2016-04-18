const gulp = require('gulp');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const rollup = require('rollup').rollup;
const sass = require('gulp-sass');
const del = require('del');

gulp.task('bundle', () => {
  return rollup({
    entry: 'src/index.js',
    external: [
      'react',
      'react-dom',
      'redux',
      'immutable',
    ],
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs({
        ignoreGlobal: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['es2015-rollup', 'react'],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
  }).then(bundle => {
    bundle.write({
      dest: 'public/build/bundle.js',
      format: 'iife',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        redux: 'Redux',
        immutable: 'Immutable',
      },
    });
  });
});

gulp.task('sass', () => {
  return gulp.src('./public/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('watch', () => {
  gulp.watch('./public/styles.scss', ['sass']);
});

gulp.task('default', ['bundle', 'sass']);
