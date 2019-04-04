"use strict";

var hole = document.querySelectorAll('.hole');

function play() {
  var tempArray = [];

  for (var i = 0; i < 16; i++) {
    if (!hole[i].classList.contains('active')) {
      tempArray.push(i);
    } else {
      hole[i].classList.remove('active');
      hole[i].innerHTML = '';
    }
  }

  var index = Math.floor(Math.random() * 15),
      imageHole = tempArray[index];
  console.log(imageHole);
  hole[imageHole].classList.add('active');
  hole[imageHole].innerHTML = "<img src=./img/goblin.png>";
  start();
}

function start() {
  setTimeout(play, 1000);
}

start();