const findElement = <type>(arr: type[], value: type): number | undefined => arr.findIndex(item => item == value)
const arr = ["a", "b", "c", "d", "e"]
console.log(findElement(arr, "d"))