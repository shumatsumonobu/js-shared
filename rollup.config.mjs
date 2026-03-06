import { createRequire } from 'node:module';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';

// Load package.json via createRequire since JSON imports
// are not natively supported in ES modules without import assertions.
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default {
  input: './src/index.ts',
  plugins: [
    // Redirect specific modules to their pre-built browser bundles.
    alias({
      entries: {
        handlebars: 'handlebars/dist/handlebars.js',
        jszip: 'jszip/dist/jszip.min.js'
      }
    }),

    // Handlebars uses "global.Symbol" internally, which throws ReferenceError
    // in browser environments where "global" is not defined.
    // Replace it with "window.Symbol" so it works correctly in the browser.
    replace({
      preventAssignment: true,
      include: '**/handlebars.*',
      values: {
        'global.Symbol': 'window.Symbol'
      }
    }),

    // Compile TypeScript and emit declaration files to the directory
    // specified by tsconfig's declarationDir.
    typescript({
      tsconfigDefaults: { compilerOptions: {} },
      tsconfig: "tsconfig.json",
      tsconfigOverride: { compilerOptions: {} },
      useTsconfigDeclarationDir: true
    }),

    // Minify the output bundles.
    terser(),

    // Allow importing JSON files (e.g. package.json).
    json(),

    // Convert CommonJS modules to ES modules so they can be included in the bundle.
    commonjs(),

    // Resolve bare module specifiers from node_modules.
    resolve({
      mainFields: ['module', 'main']
    })
  ],
  output: [
    // ES module build (for bundlers like webpack / Rollup).
    {
      format: 'esm',
      file: pkg.module
    },
    // CommonJS build (for Node.js require()).
    {
      format: 'cjs',
      file: pkg.main
    },
    // UMD build (for direct browser <script> tags).
    {
      format: 'umd',
      file: pkg.browser,
      // Convert package name to camelCase for the global variable name.
      name: pkg.name
        .replace(/^.*\/|\.js$/g, '')
        .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
    }
  ],
  watch: {
    exclude: 'node_modules/**',
    include: 'src/**'
  }
}
