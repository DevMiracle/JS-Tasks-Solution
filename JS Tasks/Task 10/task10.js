function calculateDepositAmount() {
  let initialAmount = document.getElementById("initialAmount").value;
  let durationInYears = document.getElementById("durationInYears").value;
  let interestRate = document.getElementById("interestRate").value;

  let amount = parseFloat(initialAmount);
  for (let i = 0; i < parseInt(durationInYears); i++) {
    amount += amount * (parseFloat(interestRate) / 100);
  }

  return amount.toFixed(2);
}

let calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function() {
  alert("The final amount after the deposit expires is: " + calculateDepositAmount()+ " ₼AZN");
});
