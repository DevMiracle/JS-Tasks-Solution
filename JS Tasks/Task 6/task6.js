function checkDiscountEligibility(name, age, numOrders, orderAmounts) {
  let totalAmount = orderAmounts.reduce((a, b) => a + b, 0); // Calculate total amount of orders
  let isRegular = numOrders >= 4 && totalAmount >= 100; 
  let isSenior = age >= 60; 
  if (isRegular || isSenior) {
    return `${name} is eligible for a discount.`;
  } else {
    return `${name} is not eligible for a discount.`;
  }
}
//For example
let name = "Elon Musk";
let age = 51;
let numOrders = 6;
let orderAmounts = [20, 30, 40, 50, 60, 70];

document.querySelector('.clickHere').addEventListener('click', function() {
  alert(checkDiscountEligibility(name, age, numOrders, orderAmounts));
});