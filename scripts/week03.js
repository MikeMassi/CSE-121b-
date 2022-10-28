// FUNCTIONS

// Part one addition

function add(number1, number2) {
    return number1 + number2
}

function addNumbers() {
    const addend1 = document.getElementById('addend1').value
    const addend2 = document.getElementById('addend2').value

    if (addend1 && addend2) document.getElementById('sum').innerHTML = '= ' + add(Number(addend1), Number(addend2))
}

document.getElementById('addNumbers').addEventListener('click', function(e) {
    e.preventDefault()
    addNumbers()
})


// Part two subtraction

function subtract(number1, number2) {
    return number1 - number2
}

function subtractNumbers() {
    const minuend = document.getElementById('minuend').value
    const subtrahend = document.getElementById('subtrahend').value

    if (minuend && subtrahend) document.getElementById('difference').innerHTML = '= ' + subtract(Number(minuend), Number(subtrahend))
}

document.getElementById('subtractNumbers').addEventListener('click', function(e) {
    e.preventDefault()
    subtractNumbers()
})

// Part three multiplication(Other REQ: Arrow Functions)

const multiply = (number1, number2) => number1 * number2

const mulitplyNumbers = () => {
    const factor1 = document.getElementById('factor1').value
    const factor2 = document.getElementById('factor2').value

    if (factor1 && factor2) document.getElementById('product').innerHTML = '= ' + multiply(Number(factor1), Number(factor2))
}

document.getElementById('multiplyNumbers').addEventListener('click', (e) => {
    e.preventDefault()
    mulitplyNumbers()
})

// Part four division(Other REQ: Any of the three Functions)
const divide = (number1, number2) => number1 / number2

function divideNumbers() {
    const dividend = document.getElementById('dividend').value
    const divisor = document.getElementById('divisor').value

    if (dividend && divisor) document.getElementById('quotient').innerHTML = '= ' + divide(Number(dividend), Number(divisor))
}

document.getElementById('divideNumbers').addEventListener('click', (e) => {
    e.preventDefault()
    divideNumbers()
})

/* BUILT-IN METHODS */

let date = new Date()
let year = date.getFullYear()

document.getElementById('year').innerHTML = year

/* ARRAY METHODS */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

document.querySelector('#array').innerHTML = numbers

document.querySelector('#odds').innerHTML = numbers.filter(number => number % 2)

document.querySelector('#evens').innerHTML = numbers.filter(number => !(number % 2))

document.querySelector('#sumOfArray').innerHTML = numbers.reduce((number, sum) => number + sum)

document.querySelector('#multiplied').innerHTML = numbers.map(number => number * 2)

document.querySelector('#sumOfMultiplied').innerHTML = numbers.map(number => number * 2).reduce((number, sum) => number + sum)