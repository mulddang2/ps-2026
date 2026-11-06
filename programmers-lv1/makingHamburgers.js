function solution(ingredient) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      count++;
      for (let k = 0; k < 4; k++) {
        stack.pop();
      }
    }
  }
  return count;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
