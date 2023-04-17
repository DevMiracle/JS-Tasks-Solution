function calculateLoyaltyPoints(orderNumber) {
  if (orderNumber <= 0) {
    return 0;
  } else if (orderNumber == 1 || orderNumber == 2) {
    return 1;
  } else {
    let prev1 = 1;
    let prev2 = 1;
    let current;
    for (let i = 3; i <= orderNumber; i++) {
      current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }
    return current;
  }
}

function displayLoyaltyPoints() {
  let orderNumber = prompt("Enter the order number:");
  let loyaltyPoints = calculateLoyaltyPoints(orderNumber);
  alert("For order number " + orderNumber + ", the loyalty points awarded are: " + loyaltyPoints);
  return loyaltyPoints;
}
