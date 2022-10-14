function solution(price) {
  let discountPrice = price;
  if (price >= 500000) {
    discountPrice *= 0.8;
  } else if (price >= 300000) {
    discountPrice *= 0.9;
  } else if (price >= 100000) {
    discountPrice *= 0.95;
  }
  return Math.floor(discountPrice);
}
