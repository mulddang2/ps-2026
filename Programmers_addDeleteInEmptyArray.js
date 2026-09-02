function solution(arr, flag) {
  let X = [];

  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        X.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        X.pop();
      }
    }
  }
  return X;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
