var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('to_from.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('decompress.txt'));
  
console.log("文件解压完成。");