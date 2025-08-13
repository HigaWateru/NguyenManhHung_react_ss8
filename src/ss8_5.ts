const findMatch = <type>(arr: type[]): type | undefined => arr.find(item => typeof item == "number" && item % 2 == 0)
const numbers = [1, 2, 3, 4, 5]
console.log(findMatch(numbers))
