'use strict';

/**
 * https://github.com/naptha/tesseract.js/
 *
 */
const Tesseract = require('tesseract.js');

const image = './images/src/sample.png';

Tesseract.recognize(image, {
  lang: 'jpn'
})
.progress((p) => {
// console.log('p: ', p);
})
.then((res) => {
  console.log('res: ', res.text);
  process.exit(0);
});
