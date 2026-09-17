/** NOTE:
 * [x] 문자열을 10번 순회하지 않고, 정규표현식 활용 시, 1번의 스캔으로 모든 영단어를 숫자로 치환가능
 */
function solution(numbers) {
  const numMap = {
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

  return Number(
    numbers.replace(
      /zero|one|two|three|four|five|six|seven|eight|nine/g,
      (match) => numMap[match],
    ),
  );
}

console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixseven'));
