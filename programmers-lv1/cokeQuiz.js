function solution(a, b, n) {
  let unOpenedCoke = 0;
  let serviceCoke = 0;
  let togoCoke = 0;
  let emptyBottle = n;
  let answer = 0;

  let curNum = n;
  while (curNum >= a) {
    togoCoke =
      emptyBottle % a === 0 ? emptyBottle : Math.floor(emptyBottle / a) * a;
    serviceCoke = Math.floor(togoCoke / a) * b;
    if (serviceCoke % a === 0) {
      unOpenedCoke += serviceCoke % a;
    }
    curNum = emptyBottle - togoCoke + serviceCoke - unOpenedCoke;
    emptyBottle = curNum;

    answer += serviceCoke + unOpenedCoke;
  }
  return answer;
}

// console.log(solution(2, 1, 20));
// console.log(solution(3, 1, 20));
// console.log(solution(7, 2, 25));
