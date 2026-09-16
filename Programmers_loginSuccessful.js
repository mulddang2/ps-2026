function solution(id_pw, db) {
  for (const [id, pw] of db) {
    if (id === id_pw[0] && pw === id_pw[1]) return 'login';
    if (id === id_pw[0] && pw !== id_pw[1]) return 'wrong pw';
  }
  return 'fail';
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ],
  ),
);
console.log(
  solution(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ],
  ),
);
console.log(
  solution(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ],
  ),
);
