function solution(a, b, c, d) {
  let score = 0;
  const numArr = [a, b, c, d];

  const numArrSort = numArr.sort((a, b) => a - b);
  const check = new Set(numArrSort);

  if (check.size === 4) {
    score = Math.min(...numArrSort);
  };

  if (check.size === 3) {
    if (numArrSort[0] === numArrSort[1]) {
      score = numArrSort[2] * numArrSort[3];
    } else if (numArrSort[1] === numArrSort[2]) {
      score = numArrSort[0] * numArrSort[3];
    } else if (numArrSort[2] === numArrSort[3]) {
      score = numArrSort[0] * numArrSort[1];
    }
  }

  if (check.size === 2) {
    if (numArrSort[0] === numArrSort[1] && numArrSort[2] === numArrSort[3]) {
      score = (numArrSort[0] + numArrSort[2]) * Math.abs(numArrSort[0] - numArrSort[2])
    } else if (numArrSort[0] === numArrSort[1] && numArrSort[2] !== numArrSort[3]) {
      score = (10 * numArrSort[0] + numArrSort[3]) ** 2
    } else if (numArrSort[0] !== numArrSort[1] && numArrSort[2] === numArrSort[3]) {
      score = (10 * numArrSort[1] + numArrSort[0]) ** 2
    }
  }

  if (check.size === 1) score = 1111 * numArrSort[0];

  return score;
}

