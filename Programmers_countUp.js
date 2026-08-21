function solution(start_num, end_num) {
  // const answer = [];
  // for(let i = start_num; i<= end_num; i++) {
  //     answer.push(i)
  // }
  // return answer;

  // NOTE: 특정 길이의 배열 생성 및 초기화:
  return Array.from({ length: end_num - start_num + 1 }, (_, i) => start_num + i);

}

console.log(solution(3, 10))