function solution(n, control) {
  for (const char of control) {
    if (char === "w") n += 1;
    if (char === "s") n -= 1;
    if (char === "d") n += 10;
    if (char === "a") n -= 10;
  }
  return n;
}

console.log(solution(0, "wsdawsdassw"));
