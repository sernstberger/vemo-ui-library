import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
    // {
    //   file: pkg.module,
    //   format: 'es',
    // },
  ],
  plugins: [
    external(['react', 'react-dom']),
    postcss({
      modules: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
          'Memo',
          'isFragment'
        ]
      }
    }),
    sass({ insert: true }),
    typescript(),
  ],
  external: ['react', 'react-dom', 'formik'],
}
