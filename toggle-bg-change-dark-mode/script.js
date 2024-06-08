let button = document.querySelector('button')
button.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === 'Dark Mode') {
        document.body.style.backgroundColor = '#242424'
        document.body.style.color = 'white'
        e.target.innerText = 'White Mode'
        let p = document.querySelector('.p')
        p.textContent = 'You Are In Dark-Mode'
        p.style.textAlign = 'center'
        p.style.position = 'absolute'
        p.style.top = '50%'
        p.style.transform = 'translateY(-50%)'
        p.style.left = '50%'
        p.style.transform = "translateX(-50%)"
       



    }
    else if (e.target.innerText === 'White Mode') {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        e.target.innerText = 'Dark Mode'
        let p = document.querySelector('.p')
        p.textContent = 'You Are In White-Mode'
        p.style.textAlign = 'center'
        p.style.position = 'absolute'
        p.style.top = '50%'
        p.style.transform = 'translateY(-50%)'
        p.style.left = '50%'
        p.style.transform = "translateX(-50%)"

        
    }
})