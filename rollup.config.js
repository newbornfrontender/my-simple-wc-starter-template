'use strict';

import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'components/lib/my-app.js',
  output: {
    format: 'esm',
    dir: 'public/js',
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true,
      modulesOnly: true,
    }),
  ],
  experimentalCodeSplitting: true,
};
