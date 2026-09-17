function solution(myString) {
  return myString.split('x').filter(Boolean).sort();
}

console.log(solution('axbxcxdx'));
console.log(solution('dxccxbbbxaaaa'));
