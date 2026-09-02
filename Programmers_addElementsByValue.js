/** NOTE:
 * [x] 고차 함수 활용하기: flatMap과 Array.from() 또는 fill()을 조합하여 이중 반복문 제거
 * [x] 가독성 향상: for...of 문을 사용하여 인덱스 접근(arr[i]) 최소화
 * [ ] 메모리 allocation 효율화: 배열 크기를 미리 예측 가능할 때 한 번에 생성하기
 */

function solution(arr) {
  // [x] 방식 1 -- flatMap + fill()
  return arr.flatMap((num) => Array(num).fill(num));
  // [x] 방식 2 -- for...of 활용
  // let result = [];
  // for (const num of arr) {
  //   for (let i = 0; i < num; i++) {
  //     result.push(num);
  //   }
  // }
  // return result;
  // [x] 방식 3 -- 원하는 크기의 배열 우선 만듦 + 인덱스로 접근해서 값 넣음
  //  const totalLength = arr.reduce((acc, cur) => acc + cur, 0);
  // const result = new Array(totalLength);
  // let index = 0;
  // for (const num of arr) {
  //   for (let i = 0; i < num; i++) {
  //     result[index++] = num;
  //   }
  // }
  // return result;
  // [x] 방식 4 -- Array.from 활용
  // const totalLength = arr.reduce((acc, cur) => acc + cur, 0);
  // let arrayIndex = 0; // 현재 참조 중인 인덱스
  // let count = 0; // 현재 원소를 몇번 채웠는지
  // return Array.from({ length: totalLength }, () => {
  //   const val = arr[arrayIndex];
  //   count++;
  //   if (count === val) {
  //     arrayIndex++;
  //     count = 0;
  //   }
  //   return val;
  // });
}

console.log(solution([5, 1, 4]));
console.log(solution([6, 6]));
console.log(solution([1]));
