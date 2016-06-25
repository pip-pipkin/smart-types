'use strict';

var smartType = {
    isObject: isObject,
    isArray: isArray,
    isString: isString,
    isReged: isRegex,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isNull: isNull,
    isUndefined: isUndefined,
    isJson: isJson,
    getType: getType
}

function isObject(element) {
    return getType(element) === 'object';
}

function isArray(element) {
    return getType(element) === 'array';
}

function isString(element) {
    return getType(element) === 'string';
}

function isRegex(element) {
    return getType(element) === 'regexp';
}

function isNumber(element) {
    return getType(element) === 'number';
}

function isBoolean(element) {
    return getType(element) === 'boolean';
}

function isNull(element) {
    return getType(element) === 'null';
}

function isUndefined(element) {
    return getType(element) === 'undefined';
}

function isJson(element) {
    return getType(element) === 'json';
}

function getType(element) {
    return Object.prototype.toString.call(element).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

module.exports = smartType;
