function solution(babbling) {
  const soundList = ['aya', 'ye', 'woo', 'ma'];
  let totalCount = 0;
  for (const word of babbling) {
    let currentWord = word;
    for (const sound of soundList) {
      currentWord = currentWord.replaceAll(sound, ' ').trim();
    }
    if (currentWord.length === 0) totalCount += 1;
  }
  return totalCount;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));
