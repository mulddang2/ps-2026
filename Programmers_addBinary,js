/** NOTE:
 * [x] 내장 객체는 문자열 길이 10 이하일 때 가능 -> 내장 변환 함수 한계에 구애없이 Carry를 직접 계산하는 코드로 변경해보기
 */

function solution(bin1, bin2) {
  let i = bin1.length - 1;
  let j = bin2.length - 1;
  let carry = 0;
  const result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    const bit1 = i >= 0 ? Number(bin1[i--]) : 0;
    const bit2 = j >= 0 ? Number(bin2[j--]) : 0;
    const sum = bit1 + bit2 + carry;

    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }

  return result.reverse().join('');
}

console.log(solution('10', '11'));
console.log(solution('1001', '1111'));
