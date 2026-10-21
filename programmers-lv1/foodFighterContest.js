/** NOTE:
 * [x] reverse() 메서드는 원본 배열을 직접 변조하기 때문에 예상치못한 오류 발생 가능성
 * [x] flat(), filter() 등 체이닝으로 불필요한 중간 배열이 많다.
 * [x] 홀수 검사(food[i] % 2 !== 0)후 1을 빼는 처리는 정수 나누기 연산을 사용하면 깔끔하게 처리 가능
 */

function solution(food) {
  let res = '';

  for (let i = 1; i < food.length; i++) {
    // repeat(0)은 아무것도 추가되지 않음 --> 기존값 유지됨!!
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + '0' + [...res].reverse().join('');
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
