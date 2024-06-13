let UppperCaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let LowerCaseSet = 'abcdefghijklmnopqrstuvwxyz'
let NumberSet = '1234567890'
let SymbolSet = '!@#$%^&*()_~?|/'

let getrandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}
console.log(getrandomData(UppperCaseSet));
console.log(getrandomData(LowerCaseSet));
console.log(getrandomData(NumberSet));
console.log(getrandomData(SymbolSet));



// selection html input
let passwordbox = document.querySelector('.text-show')
let lengthinput = document.querySelector('#length')
let uppercaseinput = document.querySelector('#uppercase')
let lowercaseinput = document.querySelector('#lowercase')
let numberinput = document.querySelector('#number')
let symbolinput = document.querySelector('#symbol')
let genrateBtn = document.querySelector('#generate').addEventListener('click', () => {
    GenratePassword()
})




// CReate random Pass 
let GenratePassword = (password = '') => {
    if (uppercaseinput.checked) {
        password += getrandomData(UppperCaseSet)
    }
    if (lowercaseinput.checked) {
        password += getrandomData(LowerCaseSet)
    }
    if (numberinput.checked) {
        password += getrandomData(NumberSet)
    }
    if (symbolinput.checked) {
        password += getrandomData(SymbolSet)
    }
    if (password.length < lengthinput.value) {
        return GenratePassword(password)
    }
     passwordbox.textContent = truncateString(password, lengthinput.value)

}

function truncateString(str, num) {
    if (str.length > num) {
        let substr = str.substring(0, num)
        return substr
    } else {
        return str
    }
}