"use strict";
const findMatch = (arr, predicate) => arr.find(item => typeof item == "number" && item % 2 == 0 && predicate(item));
const numbers = [1, 2, 3, 4, 5];
console.log(findMatch(numbers, n => n > 3));
