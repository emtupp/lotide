# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emtupp/lotide`

**Require it:**

`const _ = require('@emtupp/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
* `assertArraysEqual(array1, array2)`: Test code (Arrays)(logs test message into console)
* `assertEqual(actual, expected)`: Test code (logs test message into console)
* `assertObjectsEqual(actual, expected)`: Test code (Objects)(logs message into console)
* `countLetters(sentence)`: Creates an object with the count for each letter in a string
* `countOnly(allItems, itemsToCount)`: Creates an object with the count for only the elements from 'itemsToCount' inside 'allItems
* `eqArrays(array1, array2)`: Checks if two arrays are strict equals (returns true or false)
* `eqObjects(object1, object2)`: Checks if two objects are strict equals (returns true or false)
* `findKey(objects, callback)`: Finds a key for a certain input
* `findKeyByValue(objectList, keyValue)`: Find a key using its value
* `flatten(arr)`: Takes an array with nested arrays into a simple array.
* `head(array)`: Returns only the first element of an array
* `letterPositions(sentence)`: Creates an object listing each character in a sentence and their index.
* `map(array, callback)`: A copy of the already existing .map
* `middle(array)`: Returns the middle one or two numbers in an array, given said array has more than 2 elements
* `tail(arr)`: Returns everything but the first element of an array
* `takeUntil(array, callback)`: Returns all the elements in the array, up until the callback element
* `without(source, itemsToRemove)`: Returns only the elements from the array thata re not listen in itemsToRemove