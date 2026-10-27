function solution(babbling) {
  const sound = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (const word of babbling) {
    // 1. 연속 발음 검사 (sound 중 하나라도 word에 두번반복 인 경우)
    let hasDoubleSound = false;
    for (const s of sound) {
      if (word.includes(s + s)) {
        hasDoubleSound = true;
        break; // 연속 발음 찾았으므로 안쪽 루프 탈출
      }
    }

    // 연속 발음이 있었다면 이 단어 패스, 다음 단어
    if (hasDoubleSound) continue;

    // 2. 연속 발음 없는 단어일 경우
    let tempWord = word;
    for (const s of sound) {
      tempWord = tempWord.replaceAll(s, ' ');
    }

    // 3. 다 지웠을 때 tempWord가 비어 있을 경우
    if (tempWord.trim() === '') {
      count++;
    }
  }
  return count;
}

console.log(solution(['aya', 'yee', 'u', 'maa']));
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
