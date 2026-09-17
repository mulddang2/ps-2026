const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  rl.close();
}).on("close", () => {
  /** NOTE: 
   * /s: 공백 문자를 의미 (띄어쓰기, \t 탭, \n 줄바꿈 등)
   * +: 1개 이상 연속됨을 의미
   * 즉, 공백이 1개든 여러 개든 연속되어 있다면 하나의 구분자로 처리하여 나눠준다.
   * 
   * 문자열 앞뒤에 공백이 붙어 있으면 맨앞과 뒤에 빈 문자열("")요소가 생길 수 있어서, 보통 trim()과 함께 사용한다.
  */

  // .map(Number)는 .map(item => Number(item))과 완전히 동일하게 동작
  const [a, b] = input[0].trim().split(/\s+/).map(Number);
  console.log(`${a} + ${b} = ${a + b}`);
});