// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  const TAX_RATE = 0.13

  // donut quantity
  let pieChoice = ""
  let piePrice = 0

  if (document.getElementById("amount").checked) {
    pieChoice = "3"
    piePrice = 5.0
  } else if (document.getElementById("amount2").checked) {
    pieChoice = "6"
    piePrice = 9.0
  } else if (document.getElementById("amount3").checked) {
    pieChoice = "9"
    piePrice = 12.0
  } else if (document.getElementById("amount4").checked) {
    pieChoice = "12"
    piePrice = 14.0
  }

  // flavour
  let flavourChoice = ""
  let flavourPrice = 0

  if (document.getElementById("flavour-1").checked) {
    flavourChoice = "Apple"
    flavourPrice = 0.70
  } else if (document.getElementById("flavour-2").checked) {
    flavourChoice = "Blueberry"
    flavourPrice = 0.80
  } else if (document.getElementById("flavour-3").checked) {
    flavourChoice = "Pecan"
    flavourPrice = 0.50
  }

  // totals
  const subtotal = piePrice + flavourPrice
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100
  const total = Math.round((subtotal + tax) * 100) / 100

  // output
  if (pieChoice != "" && flavourChoice != "") {
    document.getElementById("results").innerHTML =
      "<p>Subtotal: $" + subtotal + "<br>Tax: $" + tax + "<br>Total: $" + total + "</p>"
  } else {
    document.getElementById("results").innerHTML =
      "<p>Please select both the slices and flavour of pie(s), it has not be selected</p>"
  }
}