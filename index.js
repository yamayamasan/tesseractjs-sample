'use strict';

/**
 * https://github.com/naptha/tesseract.js/
 *
 */
const fs = require('fs');
const Tesseract = require('tesseract.js');
const program = require('commander');

program
  .version('0.0.1')
  .option('-i, --image [value]', 'image path')
  .parse(process.argv);

const image = program.image || './images/src/sample.png';

fs.open(image, 'r', (err, fd) => {
  if (err) {
    console.error('Failed Open File');
    process.exit(1);
  }
  Tesseract.recognize(image, {
    lang: 'jpn'
  }).progress((p) => {
  // console.log('p: ', p);
  }).then((res) => {
    console.log('res: ', res.text);
    process.exit(0);
  });
});

