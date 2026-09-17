function solution(intStrs, k, s, l) {
  return intStrs.map((str) => Number(str.slice(s, s + l))).filter((num) => num > k)
}

console.log(solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5))