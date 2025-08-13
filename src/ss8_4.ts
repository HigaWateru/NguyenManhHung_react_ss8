const merge = <T, U>(obj1: T, obj2: U): T & U => {
    return {...obj1, ...obj2}
}
const obj1 = {name: "NVA", age: 20}
const obj2 = {company: "RkEdu", banner: "admin"}
console.log(merge(obj1, obj2))