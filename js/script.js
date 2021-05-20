// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // this code will check if you guessed correctly or not

  userNumber = parseInt(document.getElementById('user-number').value)

  answer = Math.floor(Math.random() * 6) + 1;  // returns a random integer from 1 to 6

  if (answer == userNumber) {
    document.getElementById('answer').innerHTML = "You guessed correctly! Great job!";
  }

  if (answer !== userNumber) {
    document.getElementById('answer').innerHTML = "Sorry, you got it wrong. Try again :(";
  }
}
