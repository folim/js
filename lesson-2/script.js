'use strict';

var money = +prompt("Вам бюджет за месяц ?", "300");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-09");


var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (var i = 0; i < 2; i++) {
  var cost = prompt("Введите обязательную статью расходов в этом месяце", "не больше 50-ти символов");
  var price = +prompt("Во сколько обойдеться?", "30");

  if (typeof(cost) === 'string' && cost != null && price != null
    && cost != '' && price != '' && cost.length < 50) {
    console.log("done");
    appData.expenses[cost] = price;
  }else {
    alert("Данные введены не верно");
  }
};



// var i = 0;
// while (i < 2) {
//   var cost = prompt("Введите обязательную статью расходов в этом месяце", "не больше 50-ти символов");
//   var price = +prompt("Во сколько обойдеться?", "30");

//   if (typeof(cost) === 'string' && cost != null && price != null
//     && cost != '' && price != '' && cost.length < 50) {
//     console.log("done");
//     appData.expenses[cost] = price;
//   }else {
//     alert("Данные введены не верно");
//   }
//   i++;
// }

/* var i = 0 
do {
  var cost = prompt("Введите обязательную статью расходов в этом месяце", "не больше 50-ти символов");
  var price = +prompt("Во сколько обойдеться?", "30");

  if (typeof(cost) === 'string' && cost != null && price != null
    && cost != '' && price != '' && cost.length < 50) {
    console.log("done");
    appData.expenses[cost] = price;
  }else {
    alert("Данные введены не верно");
  }
  i++;
}while (i < 2) */



appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
}else {
  console.log("Произошла ошибка");
}
  


