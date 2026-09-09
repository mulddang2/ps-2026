/** NOTE:
 * [x] 홀수 인덱스의 조건문 불필요 (query[i] < numArr.length 제안사항에 보장되어 있음)
 * [x] [...arr] 복사가 불필요 -- slice()는 항상 새 배열을 반환하므로 원본 arr는 절대 변형되지 않는다. let numArr=arr로 충분
 */

function solution(arr, query) {
  let left = 0;
  let right = arr.length - 1;

  query.forEach((q, i) => {
    if (i % 2 === 0) {
      // 짝수 인덱스: query[i]번 인덱스 뒷부분을 버린다.
      right = left + q;
    } else {
      // 홀수 인덱스: query[i]번 인덱스 앞부분을 버린다.
      left = left + q;
    }
  });
  return arr.slice(left, right + 1);
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
console.log(
  solution([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [8, 2, 4, 1]),
);
