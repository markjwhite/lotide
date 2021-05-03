# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install markjwhite/lotide`

**Require it:**

`const _ = require('markjwhite/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `head(arr)`: 
  * Returns the first element of an array.

* `tail(arr)`:
  * Returns all but the first element of an array.

* `middle(arr)`:
  * Returns the middle element of an array, if the array is an even # it will return the middle two elements.

* `assertArraysEqual(acutal, expected)`:
  * Requiring eqArrays, logs pass or fail to console based on whether or not arrays are equal.

* `assertEqual(actual, expected)`:
  * Verifies if two items are equal to one another. Works similarly to console.assert.

* `assertObjectsEqual(actual, expected)`:
  * Requiring eqObjects, logs pass or fail to console based on whether or not objects are equal.

* `countLetters(str)`:
  * Takes a string as an argument and returns the # number of times each character appears in a string.

* `countOnly(allItems, itemsToBeCounted)`:
  * Takes an array and object as arguments and returns an object with the sums of the array elements as keys. It will only count property values that are True.

* `eqArrays(arr1, arr2)`:
  * Returns True or False when comparing arrays for equality.

* `eqObjects(obj1, obj2)`:
  * Returns True or False when comparing objects for equality

* `findKey(obj, callback)`:
  * Takes in object and callback as arguments and returns the first key in which the callback returns a truthy value.If no key with that given value is found, then it should return undefined.

* `findKeyByValue(obj, val)`:
  * Takes in an object and a value as arguments. It scanss the object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.

* `flatten(arr)`:
  * Takes in a nested array as an argument and removes the nested arrays from inside, but keeps the stored data.
* `letterPositions(str)`:
  * Takes in a string as an argument and returns an object with indices of where each character is found in the string.

* `map(arr, callback)`:
  * Takes in an array and callback as arguments and returns a new array with the results of the callback.

* `takeUntil(arr, callback)`:
  * Takes in an array and callback as arguments and returns part of the array until the callback returns a truthy value.

* `without(source, itemsToRemove)`:
  * Takes two arrays; source and itemsToRemove as arguments and returns a new array without any of the items listed in itemsToRemove.
