document.querySelector('#btn').addEventListener('click', () => {
    let intervalid;
    clearInterval(intervalid)
    intervalid = setInterval(() => {
        let colorcode = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        console.log(colorcode);
        document.body.style.backgroundColor = colorcode
        document.querySelector('#buttton-code').textContent = colorcode
        
    }, 1000);
})