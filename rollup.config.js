const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const sourceMaps = require('rollup-plugin-sourcemaps');
const terser = require('@rollup/plugin-terser');
const typescript = require('rollup-plugin-typescript2');
const del = require('rollup-plugin-delete');
const pkg = require('./package.json');

module.exports = {
  input: `src/index.tsx`,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
      exports: 'auto',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
      exports: 'auto',
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    external(),
    postcss({
      modules: true,
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ['**/__tests__/**', '*.spec.*', '*.test.*'],
      clean: true,
    }),
    resolve(),
    commonjs(),
    sourceMaps(),
    del({
      targets: 'dist/*',
      hook: 'buildStart',
    }),
    del({
      targets: [
        'dist/utils.d.ts',
        'dist/utils.d.ts.map',
        'dist/index.spec.d.ts',
        'dist/index.spec.d.ts.map',
      ],
      hook: 'writeBundle',
    }),
    {
      external: [/\.css$/],
    },
  ],
};
