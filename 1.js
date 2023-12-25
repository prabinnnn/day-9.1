let num = Number(prompt("enter the number"));
function postiveinteger(num) {
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}
console.log(postiveinteger(num));
