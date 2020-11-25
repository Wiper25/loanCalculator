const price = document.getElementById('price')
const priceMonitor = document.getElementById('priceMonitor')
let priceMonitorNum
let percentMonitorNum
let termMonitorNum
let totel1
let totel2
let totel3
let totel4
let totel5
let totel6
price.addEventListener('input', function () {
    priceMonitorNum = priceMonitor.value = +price.value
    console.log(typeof priceMonitorNum)
}, false);
const percent = document.getElementById('percent')
const percentMonitor = document.getElementById('percentMonitor')
percent.addEventListener('input', function () {
    percentMonitorNum = percentMonitor.value = +percent.value
    console.log(typeof percentMonitorNum)
}, false);
const term = document.getElementById('term')
const termMonitor = document.getElementById('termMonitor')
term.addEventListener('input', function () {
    termMonitorNum = termMonitor.value = +term.value
    console.log(typeof termMonitor.value)
}, false);
const payment = document.createElement('div');
const calculationResults = document.createElement('h1')
const monthlyPayment = document.createElement('h3');
const loanOverPayment = document.createElement('h3');
const totalPayout = document.createElement('h3');
document.body.prepend(payment)
payment.id = 'payment'
payment.prepend(calculationResults)
calculationResults.innerHTML = 'Результат расчета'
calculationResults.style.cssText = 'text-align: center;'
payment.append(monthlyPayment)
monthlyPayment.innerHTML = `Ежемесячный платеж:`
monthlyPayment.style.cssText = 'margin-left: 10px;'
payment.append(loanOverPayment)
loanOverPayment.innerHTML = 'Переплата по кредиту:'
loanOverPayment.style.cssText = 'margin-left: 10px;'
payment.append(totalPayout)
totalPayout.innerHTML = 'Общая выплата:'
totalPayout.style.cssText = 'margin-left: 10px;'
term.addEventListener('click', function () {
    if (termMonitorNum >= 6 && termMonitorNum <= 12) {
        totel1 = priceMonitorNum / 100
        totel2 = percentMonitorNum * totel1
        totel3 = totel2 + priceMonitorNum
        totel4 = totel3 / termMonitorNum
        totel5 = totel4 * termMonitorNum
        monthlyPayment.innerHTML = `Ежемесячный платеж: ${totel4}`
        loanOverPayment.innerHTML = `Переплата по кредиту: ${totel2}`
        totalPayout.innerHTML = `Общая выплата: ${totel5}`
    } else if (termMonitorNum >= 13 && termMonitorNum <= 24) {
        totel1 = priceMonitorNum / 100
        totel2 = percentMonitorNum * totel1
        totel3 = totel2 + priceMonitorNum
        totel4 = totel3 / termMonitorNum
        totel5 = totel4 * termMonitorNum
        totel2 = totel2 * 2
        totel5 = totel2 / 2 + totel5
        monthlyPayment.innerHTML = `Ежемесячный платеж: ${totel4}`
        loanOverPayment.innerHTML = `Переплата по кредиту: ${totel2}`
        totalPayout.innerHTML = `Общая выплата: ${totel5}`
    } else if (termMonitorNum >= 25 && termMonitorNum <= 36) {
        totel1 = priceMonitorNum / 100
        totel2 = percentMonitorNum * totel1
        totel3 = totel2 + priceMonitorNum
        totel4 = totel3 / termMonitorNum
        totel5 = totel4 * termMonitorNum
        totel2 = totel2 * 3
        totel5 = totel2 / 3 + totel5
        monthlyPayment.innerHTML = `Ежемесячный платеж: ${totel4}`
        loanOverPayment.innerHTML = `Переплата по кредиту: ${totel2}`
        totalPayout.innerHTML = `Общая выплата: ${totel5}`
    }
    console.log(totel3)
}, false);