function solution(before, after) {
  const reverseStr = [...before].reverse().join('');
  return +(reverseStr === after);
}

console.log(solution('olleh', 'hello'));
console.log(solution('allpe', 'apple'));
console.log(solution('leel', 'leel'));
