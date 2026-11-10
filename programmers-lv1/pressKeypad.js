/** NOTE:
 * [x] 좌표 계산 수식화 및 객체 조회 제거하기 -- String형변환 코드 제거해서 원시 타입 연산으로 통일
 * [x] 문자열 불변성 최적화하기 -- 배열 push방식으로 변경하기
 */
function solution(numbers, hand) {
  // 숫자를 입력받아 [행, 열] 좌표를 반환하는 함수
  const getPos = (n) => {
    if (n === '*') return [3, 0];
    if (n === '#') return [3, 2];
    if (n === 0) return [3, 1];
    return [Math.floor((n - 1) / 3), (n - 1) % 3];
  };

  let left = [3, 0]; // '*' 위치
  let right = [3, 2]; // '#' 위치
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const pos = getPos(num);
    const col = pos[1];

    // 1, 4, 7 (왼쪽 열)
    if (col === 0) {
      result.push('L');
      left = pos;
    }
    // 3, 6, 9 (오른쪽 열)
    else if (col === 2) {
      result.push('R');
      right = pos;
    }
    // 2, 5, 8, 0 (가운데 열)
    else {
      const distL = Math.abs(pos[0] - left[0]) + Math.abs(pos[1] - left[1]);
      const distR = Math.abs(pos[0] - right[0]) + Math.abs(pos[1] - right[1]);

      if (distL < distR) {
        result.push('L');
        left = pos;
      } else if (distL > distR) {
        result.push('R');
        right = pos;
      } else {
        if (hand === 'right') {
          result.push('R');
          right = pos;
        } else {
          result.push('L');
          left = pos;
        }
      }
    }
  }

  return result.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
