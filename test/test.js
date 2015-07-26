var chai = require('chai');
var expect = chai.expect;
var scoreThrows = require('../index.js');

describe('scoreThrows', function () {
  it('should be a function', function () {
    expect(scoreThrows).to.be.a('function');
  });
});