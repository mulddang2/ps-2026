function solution(chicken) {
  let newChicken = 0;
  let total = 0;
  let extraCoupon = 0;
  let serviceChicken = 0;

  while (chicken >= 10) {
    newChicken = Math.floor(chicken / 10);
    extraCoupon = chicken % 10;
    total = newChicken + extraCoupon;
    serviceChicken += newChicken;
    chicken = total;
  }
  return newChicken;
}

console.log(solution(100));
console.log(solution(1081));
