function solution(ineq, eq, n, m) {
  let answer = 0;

  if (ineq === ">") {
    if (eq === "!") {
      answer = Number(n > m);
    } else if (eq === "=") {
      answer = Number(n >= m);
    }
  } else if (ineq === "<") {
    if (eq === "!") {
      answer = Number(n < m);
    } else if (eq === "=") {
      answer = Number(n <= m);
    }
  }
  return answer;
}

console.log(solution("<", "=", 20, 50)); // 1
console.log(solution(">", "!", 41, 78)); // 0
console.log(solution(">", "!", 40, 40)); // 0 (같은 값)
