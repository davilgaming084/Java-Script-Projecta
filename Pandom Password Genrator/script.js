let UppperCaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let LowerCaseSet = 'abcdefghijklmnopqrstuvwxyz'
let NumberSet = '1234567890'
let SymbolSet = '!@#$%^&*()_~?|/'

let getrandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}
// Graeb HTml Element 
let UserLength = document.querySelector('#length')
let upppercaesInput = document.querySelector('.uppercase')
let lowercaseInput = document.querySelector('#lowercase')
let numberInput = document.querySelector('#number')
let symbolInput = document.querySelector('#Symbol')
let GenrateBtn = document.querySelector("#generate").addEventListener('click', () => {
    let finalpass = '';
    let ConvertUserLengthStringIntoNumber = Number(UserLength.value)

    if (upppercaesInput.checked) {

        finalpass += getrandomData(UppperCaseSet)
    }
    if (lowercaseInput.checked) {

        finalpass += getrandomData(LowerCaseSet)
    }
    if (numberInput.checked) {

        finalpass += getrandomData(NumberSet)
    }
    if (symbolInput.checked) {

        finalpass += getrandomData(SymbolSet)
    }
    if (finalpass.length < ConvertUserLengthStringIntoNumber) {
        let minus = finalpass.length - ConvertUserLengthStringIntoNumber;
        let _intoPositive = Math.abs(minus)
        console.log(_intoPositive);
        for (let index = 0; index < _intoPositive; index++) {
            let upperREadd = getrandomData(UppperCaseSet)
            let lowerREadd = getrandomData(LowerCaseSet)
            let numberREadd = getrandomData(NumberSet)
            let symbolREadd = getrandomData(SymbolSet)
            let fourWhicUseFor = `${upperREadd}${lowerREadd}${numberREadd}${symbolREadd}`
            finalpass += getrandomData(fourWhicUseFor)
        }

    }
    console.log(finalpass);
    console.log(ConvertUserLengthStringIntoNumber);
})