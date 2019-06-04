'use strict'

const { map, isArray, isObject, mapValues } = require('lodash')

const mapValuesDeep = (obj, fn) =>
  isArray(obj)
    ? map(obj, innerObj => mapValuesDeep(innerObj, fn))
    : isObject(obj)
      ? mapValues(obj, val => mapValuesDeep(val, fn))
      : fn(obj)

module.exports = mapValuesDeep
