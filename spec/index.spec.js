/* jshint -W117, -W030 */
'use strict';

var expect = require('chai').expect;
var smartType = require('../index');


describe('isFunction', function() {
    it('should return true if element is a function', function() {
        var result = smartType.isFunction(function() {});
        expect(result).to.be.true;
    });

    it('should return false if element is not a function', function() {
        var result = smartType.isFunction({});
        expect(result).to.be.false;
    });
});

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

describe('isString', function() {
    it('should return true if element is a string', function() {
        var result = smartType.isString('10');
        expect(result).to.be.true;
    });

    it('should return false if element is not a string', function() {
        var result = smartType.isString(10);
        expect(result).to.be.false;
    });
});

describe('isRegex', function() {
    it('should return true if element is a regular expression', function() {
        var result = smartType.isRegex(/a-z/);
        expect(result).to.be.true;
    });

    it('should return false if element is not a regular expression', function() {
        var result = smartType.isRegex(function() {});
        expect(result).to.be.false;
    });
});

describe('isNumber', function() {
    it('should return true if element is a number', function() {
        var result = smartType.isNumber(10);
        expect(result).to.be.true;
    });

    it('should return false if element is not a number', function() {
        var result = smartType.isNumber('10');
        expect(result).to.be.false;
    });

    it('should return false if element is NaN', function() {
        var result = smartType.isNumber(NaN);
        expect(result).to.be.false;
    })
});

describe('isBoolean', function() {
    it('should return true if element is a boolean', function() {
        var result = smartType.isBoolean(false);
        expect(result).to.be.true;
    });

    it('should return false if element is not a boolean', function() {
        var result = smartType.isBoolean(10);
        expect(result).to.be.false;
    });
});

describe('isNull', function() {
    it('should return true if element is a null', function() {
        var nullVariable = null;

        var result = smartType.isNull(nullVariable);
        expect(result).to.be.true;
    });

    it('should return false if element is not null', function() {
        var result = smartType.isNull('hello');
        expect(result).to.be.false;
    });
});

describe('isUndefined', function() {
    it('should return true if element is undefined', function() {
        var undefinedVariable;
        var result = smartType.isUndefined(undefinedVariable);
        expect(result).to.be.true;
    });

    it('should return false if element is not undefined', function() {
        var definedVariable = 10;
        var result = smartType.isUndefined(definedVariable);
        expect(result).to.be.false;
    });
});

describe('getType', function() {
    it('should return string if element is a string', function() {
        var result = smartType.getType('10');
        expect(result).to.equal('string');
    });

    it('should return number if element is a number', function() {
        var result = smartType.getType(10);
        expect(result).to.be.equal('number');
    });
});

describe('isOfType', function() {
    it('should return true if element matches type', function() {
        var result = smartType.isOfType('', 'string');
        expect(result).to.be.true;
    });

    it('should return false if element does not match type', function() {
        var result = smartType.isOfType(10, 'string');
        expect(result).to.be.false;
    });
});
