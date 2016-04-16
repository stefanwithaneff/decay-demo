const gulp = require('gulp');
const babel = require('rollup-plugin-babel');
const rollup = require('rollup').rollup;
const del = require('del');

gulp.task('bundle-es6', () => {
  return rollup({
    entry: 'src/index.js',
    external: [
      'react',
      'react-dom',
      'redux',
      'immutable',
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['es2015-rollup', 'react'],
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
