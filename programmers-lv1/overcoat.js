function solution(n, m, section) {
  // section 배열의 값들만 순회
  // 현재 롤러로 어디까지 칠했는지를 기록하는 변수 하나 두기
  // 다음에 마주치는 구역이 이미 칠해진 범위 내에 있는지 판단

  let count = 0;
  let position = 0;
  for (let i = 0; i < section.length; i++) {
    // 새로 칠해야할 때
    if (position <= section[i]) {
      count++;
      position = section[i] + m;
    }
  }
  return count;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
