const allClear = document.getElementById('allClear')
const clearContent = document.getElementById('clearContent')

const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')
const subtraction = document.getElementById('subtraction')
const addiction = document.getElementById('addiction')

const number0 = document.getElementById('number0')
const number1 = document.getElementById('number1')
const numberTwo = document.getElementById('numberTwo')
const number3 = document.getElementById('number3')
const number4 = document.getElementById('number4')
const number5 = document.getElementById('number5')
const number6 = document.getElementById('number6')
const number7 = document.getElementById('number7')
const number8 = document.getElementById('number8')
const number9 = document.getElementById('number9')

const fraction = document.getElementById('fraction')

const result = document.getElementById('result')

let calculatorEntry = document.getElementById('calculatorEntries')
let showEquation = document.getElementById('showEquation')

let calculation = []
let equation = []
let operation = false

number1.addEventListener('click', toType1)

numberTwo.addEventListener('click', toType2)

result.addEventListener('click', resolution)



function toType2() {
    if(calculatorEntry.value == 0){
        calculatorEntry.value = 2
    } else if(operation == true){
        toClearAll()
        operation = false
        calculatorEntry.value = 2
    } 
    else{
        calculatorEntry.value = calculatorEntry.value + '2'
    }
}  


function toType1() {
    if(calculatorEntry.value == 0){
        calculatorEntry.value = 1
    } else if(operation == true){
        toClearAll()
        operation = false
        calculatorEntry.value = 1
    } else {
        calculatorEntry.value = calculatorEntry.value + '1'
    }

}

allClear.addEventListener('click', toClearAll)
/*clearContent.addEventListener('click', toClearLastContent) */
multiplication.addEventListener('click', toMultiplicate)

function toClearAll() {
    calculatorEntry.value = 0
    console.log('everything is clear')
}

function toClearLastContent() {
    console.log('last digit is clear')
}

function toMultiplicate() {
    operation = true
    pushInputEntry()
    calculation.push('*')
}

function pushInputEntry() {
    calculation.push(calculatorEntry.value)
    console.log(calculation)
}

function resolution() {
    for(i = 0; i < calculation.length; i++){
        console.log(calculation[i])

    }
}




