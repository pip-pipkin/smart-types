'use strict'

var expect = require('chai').expect;
var smartType = require('../index');

describe('isObject', function() {
    it('should return true if element is an object', function() {
        var result = smartType.isObject({});
        expect(result).to.be.true;
    });

    it('should return false if element is not an object', function() {
        var result = smartType.isObject('');
        expect(result).to.be.false;
    });
});

describe('isArray', function() {
    it('should return true if element is an array', function() {
        var result = smartType.isArray([]);
        expect(result).to.be.true;
    });

    it('should return false if element is not an array', function() {
        var result = smartType.isArray();
        expect(result).to.be.false;
    });
});
