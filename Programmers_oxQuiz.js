function solution(quiz) {
  const quizSplit = quiz.map((v) => v.split(' '));
  const result = [];
  quizSplit.map(([a, b, c, _, e]) => {
    if (b === '-') {
      Number(a) - Number(c) === Number(e) ? result.push('O') : result.push('X');
    } else {
      Number(a) + Number(c) === Number(e) ? result.push('O') : result.push('X');
    }
  });
  return result;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
console.log(
  solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2']),
);
