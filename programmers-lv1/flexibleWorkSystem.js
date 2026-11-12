/** NOTE:
 * [x] 중복 연산 수정 -- 루프 내부에서 getMinutes를 7번 호출, 이 부분을 루프 밖에서 미리 변환하기
 *
 */

// 시각을 총 분으로 변환
const toMinutes = (time) => Math.floor(time / 100) * 60 + (time % 100);

function solution(schedules, timelogs, startday) {
  let successCount = 0;

  for (let i = 0; i < schedules.length; i++) {
    const targetLimitMinutes = toMinutes(schedules[i]) + 10;
    let isAllOnTime = true;

    for (let j = 0; j < 7; j++) {
      const currentDay = ((startday - 1 + j) % 7) + 1;

      if (currentDay === 6 || currentDay === 7) continue;

      if (toMinutes(timelogs[i][j]) > targetLimitMinutes) {
        isAllOnTime = false;
        break;
      }
    }

    if (isAllOnTime) {
      successCount++;
    }
  }
  return successCount;
}

console.log(
  solution(
    [700, 800, 1100],
    [
      [710, 2359, 1050, 700, 650, 631, 659],
      [800, 801, 805, 800, 759, 810, 809],
      [1105, 1001, 1002, 600, 1059, 1001, 1100],
    ],
    5,
  ),
);
console.log(
  solution(
    [730, 855, 700, 720],
    [
      [710, 700, 650, 735, 700, 931, 912],
      [908, 901, 805, 815, 800, 831, 835],
      [705, 701, 702, 705, 710, 710, 711],
      [707, 731, 859, 913, 934, 931, 905],
    ],
    1,
  ),
);
