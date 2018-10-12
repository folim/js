'use strict';

var money = +prompt("Вам бюджет за месяц ?", "300");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-09");
var cost = prompt("Введите обязательную статью расходов в этом месяце", "");
var price = +prompt("Во сколько обойдеться?", "30");
var cost2 = prompt("Введите обязательную статью расходов в этом месяце", "");
var price2 = +prompt("Во сколько обойдеться?", "30");

var appData = {
  budget: money,
  timeData: time,
  expenses: {
   cost: price,
   cost2: price2
  },
  optionalExpenses: {
  },
  income: [],
  savings: false
}

var sum = appData.budget/30;
alert(sum);