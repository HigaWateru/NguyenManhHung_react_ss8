"use strict";
const findLongest = (str) => str.split(" ").filter(word => new Set(word).size == word.length).reduce((longest, curr) => curr.length > longest.length ? curr : longest, "");
console.log(findLongest("hello world apple banana orange pumpkin cucumber"));
