function solution(my_string, indices) {
  const indices_set = new Set(indices);

  return [...my_string].filter((_, i) => !indices_set.has(i)).join('');
}
