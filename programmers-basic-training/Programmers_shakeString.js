function solution(str1, str2) {
  return [...str1].map((char, index) => char + str2[index]).join("");
}

console.log(solution("abc", "dco")); // adbcco
console.log(solution("a", "b")); // ab (최소길이)
console.log(solution("aab", "bba")); // ababba (부분중복)
