function printTemperaturesDescending() {
  const temperature1 = Number(prompt("Enter temperature for country 1:"));
  const temperature2 = Number(prompt("Enter temperature for country 2:"));
  const temperature3 = Number(prompt("Enter temperature for country 3:"));

  const temperatures = [temperature1, temperature2, temperature3];
  temperatures.sort((a, b) => b - a);

  console.log("Temperatures in descending order:");
  console.log(temperatures[0]);
  console.log(temperatures[1]);
  console.log(temperatures[2]);

  alert(`The temperatures in descending order are: ${temperatures[0]}, ${temperatures[1]}, ${temperatures[2]}.`);
}

const button = document.querySelector(".clickHere");
button.addEventListener("click", printTemperaturesDescending);
