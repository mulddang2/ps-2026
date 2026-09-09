/** NOTE:
 * [x] 이미 값을 구한 변수에 대해 불필요한 재할당을 하는 for 반복문 제거하기
 * [x] 굳이 필요 없는 배열 참조(const result = num_list;)를 제거하고 원본 배열을 바로 사용하거나, [...num_list]를 통해 안전하게 복사하기
 * [x] 재할당 하지 않는 변수 const 사용하기
 * [x] num_list.length - 1 대신 배열의 .at() 메서드를 활용하여 코드 길이 줄여보기 (선택 사항)
 */

function solution(num_list) {
  const result = [...num_list];

  const beforeLast = result.at(-2);
  const last = result.at(-1);

  if (beforeLast < last) result.push(last - beforeLast);
  else result.push(last * 2);

  return result;
}

console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));
