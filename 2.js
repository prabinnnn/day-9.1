const number = 1234534343;
const f = Intl.NumberFormat("en-US", {
  notation: "compact",
  currency: "USD", // Use the correct currency code
  style: "currency", // Set the style directly in the object
});

console.log(f.format(number));
