function solution(k, m, score) {
  // 1. 상자의 가격을 결정하는 요소 파악
  // 2. 전체 사과 점수를 높은 점수부터 내림차순 정렬
  // 3. 정렬된 사과들을 앞에서부터 m개씩 끊어서 하나의 상자로 만듦
  score.sort((a, b) => b - a);
  let price = 0;
  for (let i = 0; i < score.length; i += m) {
    let box = score.slice(i, i + m);
    if (box.length === m) {
      price += Math.min(...box) * m;
    }
  }
  return price;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
