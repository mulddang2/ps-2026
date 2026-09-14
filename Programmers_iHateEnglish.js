function solution(numbers) {
  const numObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  Object.entries(numObj).forEach(([key, value]) => {
    numbers = numbers.replaceAll(key, value);
  });

  return Number(numbers);
}

console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixseven'));
