const findElement = <type>(arr: type[], value: type): type | undefined => arr.find(item => item == value)
const arr = ["a", "b", "c", "d", "e"]
console.log(findElement(arr, "d"))