'use strict'

const { map, isArray, isObject, isPlainObject, mapValues } = require('lodash')

const mapValuesDeep = (obj, fn, key) =>
  isArray(obj)
    ? map(obj, (innerObj, idx) => mapValuesDeep(innerObj, fn, idx))
    : isPlainObject(obj)
      ? mapValues(obj, (val, key) => mapValuesDeep(val, fn, key))
      : isObject(obj)
        ? obj
        : fn(obj, key)

module.exports = mapValuesDeep
