function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ]

  let resultArr = new Array(patterns.length).fill(0);
  for (let i = 0; i < patterns.length; i++) {
    let score = 0;
    for (let j = 0; j < answers.length; j++) {
      if (patterns[i][j % patterns[i].length] === answers[j]) score++;
      resultArr[i] = score;
    }
  }
  const max = Math.max(...resultArr);

  return resultArr
    .map((v, i) => (max === v ? i + 1 : null))
    .filter((v) => !(v === null));
}

// console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
// console.log(solution([1, 3, 2, 4, 2, 2, 1, 4, 5, 4, 1, 1, 2, 1]));
