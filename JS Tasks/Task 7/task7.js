function isSmallShipment(length, width, height, weight, distance) {
  const totalDimensions = length + width + height;

  if (totalDimensions > 150 || length > 100 || width > 100 || height > 100) {
    return false; 
  }

  if (weight > 10) {
    return false; 
  }

  if (distance < 3 || distance > 10) {
    return false; 
  }

  return true; 
}
