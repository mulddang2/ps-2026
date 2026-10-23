function solution(n, arr1, arr2) {
  // 1. arr[i]와 arr2[i]를 비트 OR 연산 (v | arr2[i])
  // 2. 2진수 문자열로 변환 (.toString(2))
  // 3. n자리 자릿수 맞추기 (.padStart(n, '0))
  // 4. 1은 '#', 0은 공백으로 변환 (.replace / .replaceAll)
  return arr1.map((v, i) => {
    return (v | arr2[i])
      .toString(2)
      .padStart(n, '0')
      .replaceAll('1', '#')
      .replaceAll('0', ' ');
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
