'use strict';

var assert = require('assert');
var efs = require('extfs');
var remove = require('./index.js');


it('It should remove empty directories', function () {
  efs.mkdirSync('fixtures');
  efs.mkdirSync('fixtures/foo');
  efs.mkdirSync('fixtures/foo/bar');
  efs.mkdirSync('fixtures/foo/bar/baz');
  efs.mkdirSync('fixtures/foo/baz');
  efs.mkdirSync('fixtures/foo/foo/');
  efs.mkdirSync('fixtures/foo/foo/bar');
  efs.mkdirSync('fixtures/baz');
  efs.mkdirSync('fixtures/bar');
  efs.mkdirSync('fixtures/baz/bar');
  remove('fixtures');
  assert(efs.isEmptySync('fixtures'));
  efs.rmdirSync('fixtures');
});
