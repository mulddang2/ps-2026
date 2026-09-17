/** NOTE:
 * [x] 배열 생성 단순화: for 문으로 push()를 반복하는 대신 Array().fill()과 펼침 연산자(...)를 활용해 보았는가?
 * [x] 배열 삭제 단순화: for 문으로 pop()을 반복하는 대신 splice()나 slice()를 활용해 단일 연산으로 처리해 보았는가?
 * [x] 고차 함수 활용: Index 접근 중심의 for 문을 forEach 또는 reduce로 대체하여 함수형 코드로 작성해 보았는가?
 *
 */

function solution(arr, flag) {
  return flag.reduce((acc, f, i) => {
    return f
      ? [...acc, ...Array(arr[i] * 2).fill(arr[i])]
      : acc.slice(0, acc.length - arr[i]);
  }, []);
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
