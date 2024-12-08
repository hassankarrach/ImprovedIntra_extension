import path from 'path'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcssImport from 'postcss-import';

import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import { emptyDir } from 'rollup-plugin-empty-dir'
import zip from 'rollup-plugin-zip'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url';

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
    chunkFileNames: path.join('chunks', '[name]-[hash].js'),
  },
  plugins: [
    require('postcss-import'),
    replace({
      'process.env.NODE_ENV': isProduction
        ? JSON.stringify('production')
        : JSON.stringify('development'),
      preventAssignment: true,
    }),
    postcss({
      plugins: [postcssImport()],
      extensions: ['.css'],
      inject: true, // Optional, for injecting CSS into the document
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.ttf'],
      limit: 0, // Always copy the files, no size limit
      destDir: 'dist/assets', // Where to copy assets
    }),
    chromeExtension(),
    simpleReloader(),
    resolve(),
    commonjs(),
    typescript(),
    emptyDir(),
    isProduction && zip({ dir: 'releases' }),
  ],
}
