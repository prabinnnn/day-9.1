function amountToCoin(amount, coin) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coin[0]) {
      const rest = amount - coin[0];
      return [coin[0]].concat(amountToCoin(rest, coin));
    } else {
      coin.shift();
      return amountToCoin(amount, coin);
    }
  }
}

console.log(amountToCoin(50, [5, 4, 3, 2, 1]));
