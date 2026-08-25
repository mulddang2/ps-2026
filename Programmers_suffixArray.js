function solution(my_string) {
  const sortedStr = []
  for (let i = my_string.length - 1; i > -1; i--) {
    sortedStr.push(my_string.slice(i));
  }
  return sortedStr.sort((a, b) => a.localeCompare(b));
}