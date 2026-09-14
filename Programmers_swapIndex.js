function solution(my_string, num1, num2) {
  const strArr = new Array(my_string.length);
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      strArr[num2] = my_string[i];
    } else if (i === num2) {
      strArr[num1] = my_string[i];
    } else strArr[i] = my_string[i];
  }
  return strArr.join('')
}

console.log(solution('hello', 1, 2));
console.log(solution('I love you', 3, 6));
