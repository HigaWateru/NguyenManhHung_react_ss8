"use strict";
const merge = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const obj1 = { name: "NVA", age: 20 };
const obj2 = { company: "RkEdu", banner: "admin" };
console.log(merge(obj1, obj2));
