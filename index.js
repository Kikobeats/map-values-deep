'use strict'

const { map, isArray, isObject, isPlainObject, mapValues } = require('lodash')

const mapValuesDeep = (obj, fn) =>
  isArray(obj)
    ? map(obj, innerObj => mapValuesDeep(innerObj, fn))
    : isPlainObject(obj)
      ? mapValues(obj, val => mapValuesDeep(val, fn))
      : isObject(obj)
        ? obj
        : fn(obj)

module.exports = mapValuesDeep
