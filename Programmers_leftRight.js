function solution(str_list) {
  let result = [];

  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'l') {
      result = str_list.slice(0, i);
      break;
    } else if (str_list[i] === 'r') {
      result = str_list.slice(i + 1);
      break;
    }
  }
  return result;
}

console.log(solution(['u', 'u', 'l', 'r']));
console.log(solution(['d', 'r']));
