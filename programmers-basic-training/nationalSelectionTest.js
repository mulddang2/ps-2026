/** NOTE:
 * [x] side-effect 중심의 map 사용 지양하기 -- 반환값이 필요한 경우에만 map 활용하기
 * [x] 데이터 구조화를 통한 인덱스 추적 용이성 확보하기 -- 값과 원본 인덱스를 떨어뜨려놓고 나중에 역추적하는 방식 대신, 초기 단계에서 {id, rank} 형태의 객체나 [id, rank] 형태의 배열로 구조화하여 연산을 단순화하기
 * [x] 배열 체이닝을 활용한 선언적 코드 작성하기 -- filter, sort, slice를 연결하여 가독성 높이기
 */

function solution(rank, attendance) {
  // 1. 참석 가능한 학생의 [학생 번호, 등수] 목록 생성 및 정렬
  const selected = rank
    .map((r, i) => ({ id: i, rank: r }))
    .filter((_, i) => attendance[i])
    .sort((a, b) => a.rank - b.rank);

  // 2. 상위 3명의 학생 번호(id) 추출
  const [a, b, c] = selected.slice(0, 3).map((student) => student.id);

  // 3. 결과 계산
  return 10000 * a + 100 * b + c;
}

console.log(
  solution(
    [3, 7, 2, 5, 4, 6, 1],
    [false, true, true, true, true, false, false],
  ),
);
console.log(solution([1, 2, 3], [true, true, true]));
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true]),
);
