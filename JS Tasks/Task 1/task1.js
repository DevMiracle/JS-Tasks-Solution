function registerCustomer() {
  const lastName = prompt("Please enter your last name:");
  const firstName = prompt("Please enter your first name:");
  const email = prompt("Please enter your email address:");

  const registrationString = `${email} - ${lastName} ${firstName}`;

  return registrationString;
}

function registrationButtonClick() {
  const registrationString = registerCustomer();
  alert(registrationString);
}
