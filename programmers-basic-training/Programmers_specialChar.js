const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
  // NOTE: 특수문자를 출력할 때는 '역슬래시 두번' 해야 출력된다.

  console.log('!@#$%^&*(\\\'"<>?:;')
});