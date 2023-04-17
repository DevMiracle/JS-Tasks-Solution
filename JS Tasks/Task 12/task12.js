function sumOfDigits(code) {
  let sum = 0;
  while (code) {
    sum += code % 10;
    code = Math.floor(code / 10);
  }
  return sum;
}

const button = document.querySelector('.clickHere');

button.addEventListener('click', function() {
  const code = prompt("Please enter your individual code:");
  const sum = sumOfDigits(parseInt(code));
  alert(`The sum of the digits of your code is ${sum}.`);
});
