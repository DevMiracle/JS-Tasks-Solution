function suggestTable(numGuests) {
  if (numGuests <= 0) {
    return "Please enter a valid number of guests";
  } else if (numGuests <= 2) {
    return "You can be seated at a small table";
  } else if (numGuests <= 4) {
    return "You can be seated at a medium table";
  } else if (numGuests <= 8) {
    return "You can be seated at a large table";
  } else {
    return "Unfortunately, we cannot accommodate a group of your size within one table";
  }
}
