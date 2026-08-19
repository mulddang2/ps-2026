function solution(code) {
  let mode = 0;
  const ret = [];
  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] !== "1" && i % 2 === 0) {
        ret.push(code[i]);
      } else if (code[i] === "1") {
        mode = 1;
        continue;
      }
    }

    if (mode === 1) {
      if (code[i] !== "1" && i % 2 === 1) {
        ret.push(code[i]);
      } else if (code[i] === "1") {
        mode = 0;
      }
    }
  }
  return ret.length !== 0 ? ret.join("") : "EMPTY";
}
