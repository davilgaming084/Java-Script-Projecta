
let time =  document.querySelector('#Time')
setInterval(()=>{
    let date = new Date();
    time.innerText = date.toLocaleTimeString()
   
 
},1000)
// console.log(date);