function solution(s) {
  // const isEven = s.length % 2 === 0;
  // const middleStartIdx = isEven
  //   ? s.length / 2 - 1
  //   : Math.ceil(s.length / 2) - 1;

  // return isEven
  //   ? s.slice(middleStartIdx, middleStartIdx + 2)
  //   : s[middleStartIdx];

  let middleStartIdx = 0;
  const len = s.length;
  let answer = '';
  
  if (s.length % 2 === 0) {
    middleStartIdx = len / 2 - 1;
    answer = s.slice(middleStartIdx, middleStartIdx + 2);
  } else {
    middleStartIdx = Math.ceil(len / 2) - 1;
    answer = s[middleStartIdx];
  }
  return answer;
}

console.log(solution('abcde'));
console.log(solution('qwer'));
