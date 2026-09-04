function solution(str_list, ex) {
  return str_list.map((v) => (!v.includes(ex) ? v : '')).join('');
}

console.log(solution(['abc', 'def', 'ghi'], 'ef'));
console.log(solution(['abc', 'bbc', 'cbc'], 'c'));
