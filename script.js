class Calculator {
    constructor(priorOperandText, currentOperandText){
        this.priorOperandText = priorOperandText
        this.currentOperandText = priorOperandText
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.priorOperand = ''
        this.calculation = undefined
    }

    delete() {

    }

    addNumber(number) {
        this.currentOperand = number
    }

    chooseOperation(Operand) {

    }

    compute(){

    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const OperandButtons = document.querySelectorAll('[data-operand]')
const resultButton = document.querySelector('[data-result]')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all-clear]')
const priorOperandText = document.querySelector('[data-prior-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(priorOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.updateDisplay()
    })
})