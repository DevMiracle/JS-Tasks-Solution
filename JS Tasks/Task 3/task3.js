function calculateReceiptAmount(name, unitPrice, quantity, participatesInPromotion) {
    let subtotal = unitPrice * quantity;
  
    if (quantity >= 5) {
      subtotal *= 0.9; // apply 10% discount
    }
  
    if (participatesInPromotion) {
      subtotal *= 0.85; // apply 15% discount
    }
  
    return subtotal;
  }
  