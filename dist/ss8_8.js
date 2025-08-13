"use strict";
const partialUpdate = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' }));
