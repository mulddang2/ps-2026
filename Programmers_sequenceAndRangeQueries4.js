function solution(arr, queries) {
    const result = [...arr];
    for (const [s, e, k] of queries) {
        for (i = s; i <= e; i++) {
            if (i % k === 0) result[i] += 1;
        }
    }
    return result;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1], [0, 3, 2], [0, 3, 3]]))