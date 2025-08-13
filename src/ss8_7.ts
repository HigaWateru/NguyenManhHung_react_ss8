const flatten = <type>(arr: type[][]): type[] => arr.reduce((acc, cur) => acc.concat(cur), [])
const str = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']]
console.log(flatten(str))