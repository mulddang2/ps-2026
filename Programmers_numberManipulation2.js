const DELTA = {
  1: "w",
  "-1": "s",
  10: "d",
  "-10": "a",
};

function solution(numLog) {
  let control = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    control += DELTA[numLog[i + 1] - numLog[i]];
  }
  return control;
}
