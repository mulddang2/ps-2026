function solution(my_string) {
  const strNum = my_string.replace(/[a-z]/gi, ' ');

  const filterNum = strNum.split(' ').filter((v) => !(v === ''));

  return filterNum.length === 0 ? 0 : filterNum.reduce((acc, cur) => +acc + +cur , 0);
}

console.log(solution('aAb1B2cC34oOp'));
console.log(solution('aopoOpppppppp'));
console.log(solution('1a2b3c4d123Z'));
