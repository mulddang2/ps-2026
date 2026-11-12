// 시간을 총 분으로 변경
const getMinutes = (time) => {
  const hour = Math.floor(time / 100);
  const minute = time % 100;
  return hour * 60 + minute;
};

function solution(schedules, timelogs, startday) {
  // 1. 체크하기 - 이 날이 평일인가? (idx 6, 7 확인)
  let count = 0;

  for (let i = 0; i < timelogs.length; i++) {
    let isSuccess = true; // 모든 평일을 이 직원이 통과 했는지 플래그

    for (let j = 0; j < timelogs[i].length; j++) {
      // 1. j번째 날이 실제 무슨 요일인지 (1: 월 ~ 7: 일)
      const currentDay = ((startday - 1 + j) % 7) + 1;
      // 2. 주말(토,일)이면 검사 제외
      if (currentDay === 6 || currentDay === 7) continue;

      const targetTime = getMinutes(schedules[i]) + 10;
      const actualTime = getMinutes(timelogs[i][j]);

      if (targetTime < actualTime) {
        isSuccess = false;
        break;
      }
    }
    if (isSuccess) {
      count++;
    }
  }

  return count;
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
