function solution(x) {
  const xStringArr = x.toString();
  let sum = 0;
  for (let i = 0; i < xStringArr.length; i++) {
    sum += +xStringArr[i];
  }
  return x % sum === 0 ? true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
