function solution(numbers, direction) {
  switch (direction) {
    case 'right': {
      numbers.unshift(numbers.pop());
      break;
    }
    case 'left': {
      numbers.push(numbers.shift());
    }
  }
  return numbers;
}

console.log(solution([1, 2, 3], 'right'));
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));
