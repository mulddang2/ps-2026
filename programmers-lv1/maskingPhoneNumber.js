function solution(phone_number) {
  const len = phone_number.length;
  return (
    phone_number.slice(0, -4).replaceAll(/[0-9]/g, '*') +
    phone_number.slice(len - 4, len + 1)
  );
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
