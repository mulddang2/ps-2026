function solution(my_string) {
  const setObj = new Set(my_string);
  return [...setObj].join('')
}

console.log(solution('people'));
console.log(solution('We are world'));
