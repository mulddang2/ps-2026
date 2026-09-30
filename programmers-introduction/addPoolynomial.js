function solution(polynomial) {
  const arr = polynomial.split('+').map((v) => v.trim());
  let constant = 0;
  let ax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('x')) {
      ax += arr[i].split('x')[0];
      if (arr[i].startsWith('x')) {
        ax++;
      }
    } else {
      constant += arr[i];
    }
  }
  return constant > 0 ? `${ax}x + ${+constant}` : `${ax}x`;
}

console.log(solution('3x + 7 + x'));
console.log(solution('x + x + x'));
