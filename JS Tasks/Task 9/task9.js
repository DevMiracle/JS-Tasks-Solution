function printDivisibleNumbers(num) {
  for (let i = 1; i <= 1000; i++) {
    if (i % num === 0) {
      console.log(i);
    }
  }
}
