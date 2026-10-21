function solution(s) {
  // 배열의 인덱스와 영단어 순서가 일치
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  numbers.forEach((word, index) => {
    s = s.split(word).join(index);
  });

  return Number(s);
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
