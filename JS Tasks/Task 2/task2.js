function calculateDeliveryCost() {
    const fixedRate = 5;
    const perKilometerRate = 0.25;
  
    const distance = parseFloat(prompt("Enter the distance in kilometers:"));
  
    if (isNaN(distance) || distance <= 0) {
      alert("Invalid distance entered. Please enter a positive number.");
      return;
    }
  
    const deliveryCost = fixedRate + perKilometerRate * distance;
    alert(`The cost of delivery is ${deliveryCost} AZN`);
  }
  