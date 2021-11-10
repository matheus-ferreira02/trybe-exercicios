const fatorial = (num) => {
  let total = num;
  for (let i = num - 1; i >= 1; i -= 1) {
    total *= i;
  }
  return total;
};

console.log(fatorial(7));
