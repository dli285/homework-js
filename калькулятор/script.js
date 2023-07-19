//кнопки
let inputFirst = document.querySelector('.calculator-input-first')
let inputSecond = document.querySelector('.calculator-input-second')

//кнопки
let buttonPlus = document.querySelector('.calculator-plus')
let buttonMinus = document.querySelector('.calculator-minus')
let buttonEquals = document.querySelector('.calculator-equals')
let buttonMultiply = document.querySelector('.calculator-multiply')
let buttonDevide = document.querySelector('.calculator-devide')

//Значения
let valueOne = null
let valueTwo = null
let result = null

buttonPlus.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value
    
    result = Number(valueOne) + Number(valueTwo)
})

buttonMinus.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value
 
    result = Number(valueOne) - Number(valueTwo)
})
buttonMultiply.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value
 
    result = Number(valueOne) * Number(valueTwo)
})
buttonDevide.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value
 
    result = Number(valueOne) / Number(valueTwo)
})
buttonEquals.addEventListener('click', function() {
    alert('Результат:' + result)
    inputFirst.value = ''
    inputSecond.value = ''
})
