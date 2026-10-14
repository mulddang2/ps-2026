function solution(s) {
  return [...s].sort().map((v)=> Number(v)).includes(NaN) ? false : true;
}

console.log(solution('a234'));
console.log(solution('023499'));
console.log(solution('Zza1234'));
