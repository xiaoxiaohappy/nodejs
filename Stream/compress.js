var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('compressfrom.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('to_from.txt.gz'));
  
console.log("文件压缩完成。");