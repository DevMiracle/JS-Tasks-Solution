function convertNumberToText(num) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const special = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  let text = '';
  
  if (num < 10) {
    text += ones[num];
  } else if (num >= 10 && num < 20) {
    text += special[num - 10];
  } else if (num >= 20 && num < 100) {
    const tenIndex = Math.floor(num / 10);
    const oneIndex = num % 10;
    
    text += tens[tenIndex];
    
    if (oneIndex > 0) {
      text += ' ' + ones[oneIndex];
    }
  }
  
  return text;
}

const button = document.querySelector('.clickHere');

button.addEventListener('click', () => {
  const num = prompt('Enter a number between 1 and 99:');
  
  if (isNaN(num) || num < 1 || num > 99) {
    alert('Invalid input!');
  } else {
    const text = convertNumberToText(num);
    alert(text);
  }
});
