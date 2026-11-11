function solution(new_id) {
  // 1단계
  let result = new_id.toLowerCase();
  // 2단계
  result = result.replace(/[^a-z0-9\-_.]/g, '');
  // 3단계
  result = result.replace(/\.{2,}/g, '.');
  // 4단계: 마침표가 처음이나 끝에 위치하면 제거
  result = result.replace(/^\.|\.$/g, '');
  // 5단계: 빈문자열이면, new_id에 'a'를 대압힘
  if (result === '') {
    result = 'a';
  }
  // 6단계: 길이가 16자 이상이면, 15개 제외한 나머지는 삭제
  if (result.length >= 16) {
    result = result.slice(0, 15);
    if (result.endsWith('.')) {
      result = result.slice(0, -1); // 맨뒤 1글자 자르기
    }
  }

  // 7단계: 길이가 2자 이상이라면, 길이가 3이 될 때까지 마지막 문자 반복해서 붙이기
  if (result.length <= 2) {
    const lastChar = result[result.length - 1];

    while (result.length < 3) {
      result += lastChar;
    }
  }
  return result;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
