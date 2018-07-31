'use strict';
//
//var sumNumber = function (number) {
//	var tmp = String(number);
//	var arr = tmp.split('', 3);
//  var result = array.reduce(function(sum, current) {
//  return sum + Number(current);
//}, 0);
//  return result;
//}

//var array = sumNumber(12345);
//array.forEach(function(item, i, array) {
//  console.log( i + ": " + item + " (массив:" + array + ")" );
//});

//var result = array.reduce(function(sum, current) {
//  return sum + Number(current);
//}, 0);


function getSum(number) {
	var tmp = String(number);
	var arr = tmp.split('', 3);
  var result = arr.reduce(function(sum, current) {
  return sum + Number(current);
}, 0);
  return console.log(result);
}


function getSum(number) {
	var arr = number.split('', 3);
  var result = arr.reduce(function(sum, current) {
  return sum + Number(current);
}, 0);
  return console.log(result);
}

(function () {
var items = document.querySelectorAll(".level2-name.catalog");
for (var i=0; i< items.lenght; i++) {
items[i].classList.add("closed");
}
}());


  for (var i=0; i< 18; i++) {
    items[i].addEventListener('click', function() {
      items[i].classList.toggle("opened");
    })
}

var links = document.querySelectorAll(".level3 a:nth-child(2)");
var items = document.querySelectorAll(".level2-name.catalog");

for (var i=0; i< 18; i++) {
    links[i].addEventListener('click', function() {
      items[i].classList.remove("closed");
    })
}

