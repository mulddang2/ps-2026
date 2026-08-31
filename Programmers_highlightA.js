function solution(myString) {
  const strA = myString.replaceAll('a', 'A');
  let result = '';

  for (let str of strA) {
    if (str !== 'A' && str === str.toUpperCase()) {
      str = str.toLowerCase();
    }
    result += str;
  }
  return result;
}

console.log(solution('abstract algebra'));
console.log(solution('PrOgRaMmErS'));
