"use strict";
const b9 = (() => {
    const flatten = (arr) => arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
    const nums = [1, [2, [3, 4], 5], 6];
    console.log(flatten(nums));
});
b9();
