'use strict';

const { readdirSync, readFile, writeFile } = require('fs');
const htmlnano = require('htmlnano');

const dir = 'public';
const options = {};

readdirSync(dir)
  .filter((file) => file.match(new RegExp('.html$')))
  .map((file) =>
    readFile(`${dir}/${file}`, (err, html) =>
      htmlnano
        .process(html, options)
        .then(({ html }) => writeFile(`${dir}/${file}`, html, () => true))
        .catch((err) => console.error(err)),
    ),
  );
