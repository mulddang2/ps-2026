/** NOTE:
 * [x] findIndex로 축약해보기
 */
function solution(num_list) {
  return num_list.findIndex((v) => v < 0);
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
console.log(solution([13, 22, 53, 24, 15, 6]));
