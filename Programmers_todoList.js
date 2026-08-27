/** NOTE:
 * [x] filter로 변경가능
 * [x] 순회 대상이 반대 -- 반환값은 todo_list 인데, finished를 순회하고 있어, 인덱스로 todo_list를 역참조하고 있다. 이보다는, todo_list를 순회하고, finished[i]를 조건으로 쓰는 것이 더 자연스럽다.
 * [x] v===false -> !v -- finished는 boolean 배열임이 보장되기 때문에,불필요
 * [x] result 변수명 -- unfinished 같은 이름으로 변경해도 좋을 듯함.
 */
function solution(todo_list, finished) {
  return todo_list.filter((_, i) => !finished[i]);
}
