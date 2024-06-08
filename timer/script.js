setInterval(() => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector(".timer").textContent = time;

},1000)