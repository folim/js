'use strict';

let startBtn = document.getElementById('start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  yearSavingsValue = document.querySelector('.yearsavings-value'),
  dayBudgetExpenses = document.querySelector('.daybudgetexpenses-value'),

  expensesItem = document.querySelectorAll('.expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('#income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('#sum'),
  percentValue = document.querySelector('#percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value'),
  data = document.querySelector('.data'),
  inputs = data.querySelectorAll('input');
  

let money, time, nonCost;
    
startBtn.addEventListener("click", function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-09");
  money = +prompt("Вам бюджет за месяц ?", "300");
    
  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Вам бюджет за месяц ?", "300");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear(); 
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener("click", function() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let cost = expensesItem[i].value;
    let price = expensesItem[++i].value;
    
    if (typeof(cost) === 'string' && cost != null && price != null
      && cost != '' && price != '' && cost.length < 50 && appData.buget != money) {
      console.log("done");
      appData.expenses[cost] = price;
      sum += +price;
      appData.dayBudgetExpensesValue = (appData.budget - sum);
      
    } else {
      i = i - 1;
      expensesBtn.classList.add("disable");
    }
  }
  expensesValue.textContent = sum;
  dayBudgetExpenses.textContent = (appData.dayBudgetExpensesValue / 30).toFixed();
});

optionalExpensesBtn.addEventListener("click", function() {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let nonCost = optionalExpensesItem[i].value;
  
    if (typeof(nonCost) === 'string' && nonCost != null
    && nonCost != '' && nonCost.length < 50 && appData.buget != money){
    console.log("Статья необязательных расходов заполнена")
    appData.optionalExpenses[i] = nonCost;
    optionalExpensesValue.textContent +=  appData.optionalExpenses[i] + ' ';
    } else {
      optionalExpensesBtn.classList.add("disable");
    }
  } 
});

countBtn.addEventListener("click", function() {
  if (appData.budget != undefined && appData.buget != money) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    
    if(appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    }else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    }else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    countBtn.classList.add("disable");
  }

});

incomeItem.addEventListener("input", function() {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
    
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});




let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

    
for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key);
}    






    
