function solution(todo_list, finished) {
  const result = [];
  finished.forEach((v, i) => {
    if (v === false) {
      result.push(todo_list[i]);
    }
  });
  return result;
}
