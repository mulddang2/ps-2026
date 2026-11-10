function solution(numbers, hand) {
  // 1, 4, 7 - 왼손
  // 3, 6, 9 - 오른손
  // 2, 5, 8, 0 - 현재 키패드 위치에서 더 가까운 손가락 -- 거리가 같다면 오른손 잡이는 오른손, 왼손 잡이는 왼손
  let leftPosition = '*';
  let rightPosition = '#';

  const position = {
    '1': [0, 0],
    '2': [0, 1],
    '3': [0, 2],
    '4': [1, 0],
    '5': [1, 1],
    '6': [1, 2],
    '7': [2, 0],
    '8': [2, 1],
    '9': [2, 2],
    '*': [3, 0],
    '0': [3, 1],
    '#': [3, 2],
  };

  let result = '';

  for (let n = 0; n < numbers.length; n++) {
    const num = String(numbers[n]);
    const col = position[num][1];

    // 1, 4, 7인 경우
    if (col === 0) {
      // 1, 4, 7, * => 왼쪽손
      result += 'L';
      leftPosition = num;
    }
    // 3, 6, 9인 경우
    else if (col === 2) {
      result += 'R';
      rightPosition = num;
    } else {
      const leftD =
        Math.abs(position[num][0] - position[leftPosition][0]) +
        Math.abs(position[num][1] - position[leftPosition][1]);

      const rightD =
        Math.abs(position[num][0] - position[rightPosition][0]) +
        Math.abs(position[num][1] - position[rightPosition][1]);

      // 2, 8, 2, 5, 5

      // left, right의 position
      // 현재 위치
      // num 위치에서 leftPosition / rightPosition 뺴기
      // 5의 실제 위치 - 기존 왼손 위치

      if (leftD < rightD) {
        result += 'L';
        leftPosition = num;
      } else if (leftD > rightD) {
        result += 'R';
        rightPosition = num;
      } else {
        // 거리가 같을 때
        if (hand === 'right') {
          result += 'R';
          rightPosition = num;
        } else {
          result += 'L';
          leftPosition = num;
        }
      }
    }
  }
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
