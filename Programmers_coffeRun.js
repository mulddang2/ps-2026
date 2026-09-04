function solution(order) {
  let totalCount = 0;

  for (const menu of order) {
    if (menu.includes('ame')) {
      totalCount += 4500;
    } else if (menu.includes('latte')) {
      totalCount += 5000;
    } else totalCount += 4500;
  }
  return totalCount;
}

console.log(
  solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything']),
);
console.log(solution(['americanoice', 'americano', 'iceamericano']));
