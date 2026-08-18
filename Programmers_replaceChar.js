const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const str = input[0];

  //const answer = str.replace(찾을문자, 바꿀문자)
  // replace()는 기본적으로 첫번째로 발견한 문자열 하나만 바꾼다.
  // /g 플래그: 일치하는 첫번째 항목 뿐만 아니라 모든 항목 찾아 변경함
  const answer = str.replace(/[a-zA-Z]/g, (char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
  );

  console.log(answer);
});
