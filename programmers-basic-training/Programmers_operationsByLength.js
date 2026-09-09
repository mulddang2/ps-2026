/** NOTE:
 * [x] 화살표 함수의 암시적 반환(Implicit Return) 활용하기
 * [x] 중괄호 {}와 return 키워드를 생략하면 코드를 훨씬 간결하게 작성할 수 있습니다.
- AS-IS: (sum, cur) => { return sum + cur; }
- TO-BE: (sum, cur) => sum + cur
 * [x] 두 번째 reduce에 초기값 명시하기
 */
function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((sum, cur) => sum + cur, 0)
    : num_list.reduce((multiply, cur) => multiply * cur, 1);
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution([2, 3, 4, 5]));
