'use strict';

/**
 * https://github.com/naptha/tesseract.js/
 *
 */
const resize = require('./resize.js');
const Tesseract = require('tesseract.js');

const opts = {
  width: 2000
};

resize.exec(opts).then((image) => {
  if (!image) {
    console.error('Resized Error');
    process.exit(1);
  }
  console.log('Resized image:', image.path);
  Tesseract.recognize(image.path, {
    lang: 'jpn'
  })
  .progress((p) => {
//   console.log('p: ', p);
  })
  .then((res) => {
    console.log('res: ', res.text);
    process.exit(0);
  });
});
