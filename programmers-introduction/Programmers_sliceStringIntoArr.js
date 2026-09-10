function solution(my_str, n) {
  const result = [];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }
  return result;
}

console.log(solution('abc1Addfggg4556b', 6));
console.log(solution('abcdef123', 3));
