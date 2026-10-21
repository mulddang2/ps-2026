function solution(food) {
  const foodArr = [1];
  const temp = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 !== 0) {
      foodArr.push(food[i] - 1);
    } else {
      foodArr.push(food[i]);
    }
  }

  for (let i = 1; i < foodArr.length; i++) {
    temp.push(String(i).repeat(foodArr[i] / 2));
  }

  const result = [...temp, '0', temp.reverse()];
  return result
    .flat()
    .filter((v) => v !== '')
    .join('');
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
