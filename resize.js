'use strict';

const easyimage = require('easyimage');

const baseDir = __dirname;
const srcDir = `${baseDir}/images/src`;
const dstDir = `${baseDir}/images/dst`;

const DEF_FILE = 'sample.png';
const DEF_WIDTH = 1280;

exports.exec = function (opt) {
  const file  = (opt && opt.file)? opt.file : DEF_FILE;
  const width = (opt && opt.width)? opt.width : DEF_WIDTH;

  return easyimage.resize({
    src: `${srcDir}/${file}`,
    dst: `${dstDir}/${file}`,
    width: width
  });
};
