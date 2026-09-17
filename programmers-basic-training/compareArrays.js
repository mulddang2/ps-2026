/** NOTE:
 * [x] 중복 함수 호출 제거 -- sum(arr1)과 sum(arr2)의 결과를 변수에 할당하여 재사용
 * [x] 불필요한 연산 지연: 길이가 다른 경우 배열의 합을 계산하지 않고 즉시 반환하도록 하기
 * [x] 조건문 가독성 향상 -- 반복 if문 대신 Math.sign() 또는 삼항 연산자를 사용하여 코드 단순화
 */

function solution(arr1, arr2) {
  // 1. 길이를 우선 비교 -- 다르면 바로 return
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  // 2. 길이가 같을 때만 합을 계산 (1회만 계산)
  const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

  return Math.sign(sum1 - sum2);
}

console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
