// Created method for trulength of string 
Object.prototype.truelength = function () {
    return this.replace(/\s/g, '').length;
} 


let ToUpperCase = () => {
    let textarea = document.querySelector('#textarea')
    textarea.value = textarea.value.toUpperCase()
}
let ToLowerCase = () => {
    let textarea = document.querySelector('#textarea')
    textarea.value = textarea.value.toLowerCase()
}
let Copy = () => {
    let textarea = document.querySelector('#textarea')
    textarea.select()
    textarea.setSelectionRange(0, 9999999)
    navigator.clipboard.writeText(textarea.value)
    alert(`copy =>   ${textarea.value}`)
}
let textarea = document.querySelector('#textarea')
textarea.addEventListener('input', (e) => {
    console.log(e.target.value.length);
     document.querySelector('.Lenght').textContent =(`length is ${e.target.value.truelength()}`)
})


