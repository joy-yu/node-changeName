var fs = require('fs');
var crypto = require('crypto');
var hashArr = [];
var md5;

function reName(path, spl) {
    var fileName = fs.readdirSync(picDir);
    var len = fileName.length;
    var type = '';

    return new Promise((resolve, reject) => {

        fileName.forEach((v, i, a) => {

            md5 = crypto.createHash('md5');
            md5.update(v);
            hashArr.push(md5.digest('hex'));

            type = '.' + v.match(/[^\.]+$/g);
            if (spl === 'hash') {
                fs.renameSync(path + v, path + hashArr[i] + type);
            } else {
                fs.renameSync(path + v, path + i + type);
            }
        });
        resolve(fileName);
    });
}
module.exports = reName;

/*
    var test = require('./changeName.js');
    var path = 'D:/baiduyundownload/静下心来听音乐/omg/';
    test(path, 'hash');
*/
