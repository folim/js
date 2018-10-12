'use strict';

var num = prompt("Введите 5-ти значное число", "33721");
var string = num;
var multiply = +string.charAt(0) * string.charAt(1) * string.charAt(2) * string.charAt(3) * string.charAt(4);

console.log(multiply);

var cube = multiply ** 3;
var firstTwoNum = String(cube);

alert(+firstTwoNum.charAt(0) + firstTwoNum.charAt(1));


