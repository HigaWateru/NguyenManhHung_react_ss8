function reverseArr <type> (arr: type[]): type[] {
    return arr.slice().reverse()
}
console.log(reverseArr([1, 2, 3, 4, 5]))