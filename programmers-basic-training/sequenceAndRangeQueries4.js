/** NOTE:
 * [x] for문 내에서 let 선언 안함
 * [x] 문제 제한 사항에 0 <= k가 있어서 k=0이 들어올 수 있는 부분을 코드에 의도를 드러내기
 * [x] for문 루프를 k의 배수로 구하고 k씩 건너뛰어 성능개선
 */
function solution(arr, queries) {
    const result = [...arr];
    for (const [s, e, k] of queries) {
        if (k === 0) continue;
        for (let i = Math.ceil(s / k) * k; i <= e; i += k) {
            result[i] += 1;
        }
    }
    return result;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1], [0, 3, 2], [0, 3, 3]]))