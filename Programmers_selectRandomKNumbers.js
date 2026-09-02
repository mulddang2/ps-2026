/** NOTE:
 * [x] uniqueArr.length가 push로 변경되기 때문에, 변경되기 전에 추가해야할 갯수를 미리 담아놓아야한다.
 * [x] Array.fill()과 concat() 활용해서 수정
 */
function solution(arr, k) {
  const uniqueArr = [...new Set(arr)];
  if (uniqueArr.length >= k) return uniqueArr.slice(0, k);
  return uniqueArr.concat(Array(k - uniqueArr.length).fill(-1));
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));
console.log(solution([0, 1, 1, 1, 1], 4));
console.log(solution([0, 1, 3, 4, 4], 6));
console.log(solution([0], 1));
