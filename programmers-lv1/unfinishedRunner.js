function solution(participant, completion) {
  // Map 안에 이름을 키, 값은 몇명인지
  const participantMap = new Map();

  // Map에 들어있는 이름의 현재값 기준
  for (const p of participant) {
    if (participantMap.has(p)) {
      participantMap.set(p, participantMap.get(p) + 1);
    } else {
      participantMap.set(p, 1);
    }
  }

  // 완주자 처리하기
  completion.forEach((v) => participantMap.set(v, participantMap.get(v) - 1));

  for (const p of participant) {
    if (participantMap.get(p) > 0) return p;
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola'],
  ),
);

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']),
);
