function solution(lines) {
  // 1. 크기 200 배열을 0으로 초기화한다.
  const arr = new Array(200).fill(0);
  let count = 0;
  // 2. 각 선분 [start, end]에 대해, 선분이 지나는 1 단위 길이 구간에 해당하는 배열칸의 값을 +1씩 증가시킨다.

  for (let i = 0; i < lines.length; i++) {
    const [start, end] = [lines[i][0], lines[i][1]];
    for (let j = start; j < end; j++) {
      arr[j + 100]++;
    }
  }
  // 3. 모든 선분 처리 후, 배열에서 값이 2 이상인 칸의 개수를 세어 리턴
  arr.forEach((v) => {
    if(v >= 2) {
      count++;
    }
  })
  return count;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ]),
);
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ]),
);
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ]),
);
