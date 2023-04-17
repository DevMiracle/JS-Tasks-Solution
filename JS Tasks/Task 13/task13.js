function withdraw(amount) {
  const denominations = [100, 50, 20, 10, 5, 1];
  let remainingAmount = amount;
  const result = {};

  denominations.forEach(denomination => {
    const notes = Math.floor(remainingAmount / denomination);
    if (notes > 0) {
      result[denomination] = notes;
      remainingAmount -= notes * denomination;
    }
  });

  return result;
}
const button = document.querySelector('.clickHere');
  button.addEventListener('click', () => {
    alert('🥚🐰 Happy Easter! 🐰🥚');
  });