const partialUpdate = <T, U>(obj1: T, obj2: U): T & U => {
    return {...obj1, ...obj2}
}
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ name: 'Bob', job: 'Designer' }))
