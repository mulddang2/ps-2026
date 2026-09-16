function solution(id_pw, db) {
  let result = '';
  db.forEach((v) => {
    if (v[0] === id_pw[0] && v[1] === id_pw[1]) {
      result = 'login';
    } else if (v[0] === id_pw[0] && v[1] !== id_pw[1]) {
      result = 'wrong pw';
    } else if (v[0] !== id_pw[0]) result = 'fail';
  });
  return result;
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
