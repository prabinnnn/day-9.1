function amounttocoin(amount, coin) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coin[0]) {
      rest = amout - coin[0];
      return concat(amunttocoin(rest, coin));
    } else {
      coin.shift();
      return amounttocoin(rest, coin);
    }
  }
}
console.log(amounttocoin(50, [5, 4, 3, 2, 1]));
