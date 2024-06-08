//  onclick function way 
// function change() {
//     var event = window.event || arguments.callee.caller.arguments[0]; // Accessing the event object
//     var target = event.target || event.srcElement; // Accessing the element that triggered the event
//     let colorName = target.textContent;;
//     var divChange = document.querySelector('#divcolor'); // Correcting variable name to camelCase
//     divChange.style.backgroundColor = colorName; // Setting background color of divChange
//     document.querySelector('.Indicate').textContent = colorName
// }

//  AddEventlistner way 
let boxes = document.querySelectorAll('.InnerDiv');
console.log(boxes);
boxes.forEach(box => {
    // console.log(box);
    box.addEventListener('click', (e) => {
        let colorName = e.target.textContent;;
        console.log(colorName);
        var divChange = document.querySelector('#divcolor'); // Correcting variable name to camelCase
        divChange.style.backgroundColor = colorName; // Setting background color of divChange
        document.querySelector('.Indicate').textContent = colorName
    });
});



