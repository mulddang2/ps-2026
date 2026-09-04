function solution(arr, delete_list) {
  const isKeep = arr.map((v) => !delete_list.includes(v));

  const result = [];

  isKeep.filter((v, i) => {
    if (v === true) {
      result.push(arr[i]);
    }
  });
  return result;
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
