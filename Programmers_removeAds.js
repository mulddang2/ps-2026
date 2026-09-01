function solution(strArr) {
  return strArr.filter((str) => {
    if (!str.includes('ad')) return str;
  });
}

console.log(solution(['and', 'notad', 'abcd']));
console.log(solution(['there', 'are', 'no', 'a', 'ds']));
