/** NOTE:
 * [x] 불필요한 바깥 for 루프 제거 (빈배열일 경우 undefined 반환)
 * [x] if 4개 -> switch(n) 또는 if/else if로 변경하기
 * [x] n이 1~4 밖일 때의 반환값이 없다. -> default 고려
 * [x] intervalList는 n===4일 때만 쓰이므로 해당 분기 안으로 옮기기
 */
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4: {
      const intervalList = [];
      for (let i = a; i <= b; i += c) {
        intervalList.push(num_list[i]);
      }
      return intervalList;
    }
    default:
      return [];
  }
}

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
