function solution(spell, dic) {
  for (let i = 0; i < dic.length; i++) {
    let matchCount = 0;
    const alphabet = new Int8Array(26);
    for (let j = 0; j < dic[i].length; j++) {
      alphabet[dic[i][j].charCodeAt() - 97] = 1;
    }
    for (let k = 0; k < spell.length; k++) {
      if (dic[i].length === spell.length) {
        if (alphabet[spell[k].charCodeAt() - 97] === 1) {
          matchCount++;
        }
      }
    }
    if (matchCount === spell.length) return 1;
  }
  return 2;
}

console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']));
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']));
console.log(
  solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som']),
);
