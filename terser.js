'use strict';

const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { minify } = require('terser');

const dir = 'public/js';
const options = {};

readdirSync(dir)
  .filter((file) => file.match(new RegExp('.js$')))
  .map((file) =>
    writeFileSync(
      `${dir}/${file}`,
      minify(readFileSync(`${dir}/${file}`, 'utf8'), options).code,
    ),
  );
