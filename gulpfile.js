const gulp = require('gulp');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const rollup = require('rollup').rollup;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('bundle', () => {
  return rollup({
    entry: 'src/index.js',
    external: [
      'react',
      'react-dom',
      'redux',
      'immutable',
      'd3',
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
        d3: 'd3',
      },
    });
  });
});

gulp.task('sass', () => {
  return gulp.src('./public/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%'] }))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('watch', () => {
  gulp.watch('./public/styles.scss', ['sass']);
});

gulp.task('default', ['bundle', 'sass']);
