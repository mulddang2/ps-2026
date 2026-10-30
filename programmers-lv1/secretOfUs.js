function solution(s, skip, index) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const filteredArr = alphabet.filter((v) => !skip.includes(v));
  let result = '';
  for (const c of s) {
    result +=
      filteredArr[(filteredArr.indexOf(c) + index) % filteredArr.length];
  }
  return result;
}

console.log(solution('aukks', 'wbqd', 5));
