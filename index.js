'use strict';

var file = require('file');
var fs = require('extfs');
var remove;

var remove = function(path) {
  var folders = [];
  var removed = [];

  file.walkSync(path, function(dir) {
    if (dir.length) {
      folders.push(dir);
    }
  });

  folders = folders.reverse();
  folders.pop(); //dont remove main folder

  folders.forEach(function(dir) {
    var empty = fs.isEmptySync(dir);
    if (empty) {
      fs.rmdirSync(dir);
      removed.push(dir);
    }
  });

  return removed;

};

module.exports = remove;
