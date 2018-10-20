'use strict';

var money, time, nonCost;

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
  savings: true,
  chooseExpenses: function() {
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
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    }else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    }else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      var save = +prompt("Какова сумма накоплений?", ""),
          percent = +prompt("Под какой процент?","");
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);   
    }
  },
  chooseOptExpenses: function() {
    for (var i = 1; i < 4; i++) {
      var nonCost = prompt("Статья необязательных расходов?","");
  
      if (typeof(nonCost) === 'string' && nonCost != null
      && nonCost != '' && nonCost.length < 50){
      console.log("Статья необязательных расходов заполнена")
      appData.optionalExpenses[i] = nonCost;
      }
    } 
  },
  chooseIncome: function() {
    for (var i = 0; i < 1; i++) {
      var items = prompt("Что принесет дополнительный доход ? (Перечислить через запятую)", "");
    
      if (typeof(items) === 'string' && items != null && items != ""){
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще ?", ""));
        appData.income.sort();
      }else {
        i--;
      }
    }
    appData.income.forEach(function(item, index){
      alert(index + 1 + ". " + "Способы доп. заработка: " + item);
    });
  }
};

for (var key in appData) {
  console.log("Наша программа включает в себя данные: " + key);
}


