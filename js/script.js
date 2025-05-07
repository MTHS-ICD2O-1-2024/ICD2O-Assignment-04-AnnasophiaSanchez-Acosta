// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculateTotal() {
  const pieType = document.getElementById("pieType").value
  const quantity = parseInt(document.getElementById("quantity").value)
  let pricePerSlice = 0

  // Use if-else to determine pie price
  if (pieType === "apple") {
    pricePerSlice = 3.5
  } else if (pieType === "blueberry") {
    pricePerSlice = 3.75
  } else if (pieType === "pumpkin") {
    pricePerSlice = 4.0
  } else if (pieType === "pecan") {
    pricePerSlice = 4.25
  }

  let subtotal = pricePerSlice * quantity

  // Apply discount if quantity is 3 or more slices
  if (quantity >= 3) {
    subtotal *= 0.9 // 10% discount
  }

  const tax = subtotal * 0.13 // 13% tax
  const total = subtotal + tax

  // Display the result
  document.getElementById("result").innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax (13%): $${tax.toFixed(2)}</p>
    <p><strong>Total: $${total.toFixed(2)}</strong></p>`
}
