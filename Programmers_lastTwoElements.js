function solution(num_list) {
  const result = num_list;
  let beforeLast = num_list[num_list.length - 2];
  let last = num_list[num_list.length - 1];
  for (let i = num_list.length - 2; i <= num_list.length - 1; i++) {
    if (i !== num_list.length - 2) last = num_list[i];
    else beforeLast = num_list[i];
  }

  if (beforeLast < last) result.push(last - beforeLast);
  else result.push(last * 2);

  return result;
}

console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));
