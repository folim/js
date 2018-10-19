'use strict';

var money, time, noncost;

function start() {
  money = +prompt("Вам бюджет за месяц ?", "300");
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-09");

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Вам бюджет за месяц ?", "300");
  }
}
start();

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (var i = 0; i < 2; i++) {
    var cost = prompt("Введите обязательную статью расходов в этом месяце", "не больше 50-ти символов");
    var price = +prompt("Во сколько обойдеться?", "30");
  
    if (typeof(cost) === 'string' && cost != null && price != null
      && cost != '' && price != '' && cost.length < 50) {
      console.log("done");
      appData.expenses[cost] = price;
    }else {
      i--;
      alert("Данные введены не верно");
    }
  };
}
chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  }else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  }else {
    console.log("Произошла ошибка");
  }
}
detectLevel();
  
function checkSavings() {
  if (appData.savings == true) {
    var save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?","");
    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);   
  }
}
checkSavings();

function chooseOptExpenses() {
  for (var i = 1; i < 4; i++) {
    var noncost = prompt("Статья необязательных расходов?","");

    if (typeof(noncost) === 'string' && noncost != null
    && noncost != '' && noncost.length < 50){
    console.log("Статья необязательных расходов заполнена")
    appData.optionalExpenses[i] = noncost;
    }

  } 
}
chooseOptExpenses();