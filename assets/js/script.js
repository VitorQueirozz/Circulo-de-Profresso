let btn = document.querySelector('.btn-enviar')
let btnPoup = document.querySelector('.btn-poup')
let poup = document.querySelector('.poup')
let bodyy = document.querySelector('body')

function btnPop() {
    bodyy.classList.toggle('active')
    poup.classList.toggle('ativo')
    btn.disabled = true;
}

function verProgresso(){
    let input = document.querySelector('.input').value
    let circleProgress = document.querySelector('.circleProgress')
    let number = document.querySelector('.number')
    if(input > 100) {
        btnPop()
    } else {
        circleProgress.style.strokeDashoffset = 440 - (440 * input) / 100
        number.innerHTML = `${input}%`
    }
}


btn.addEventListener('click', verProgresso)
btnPoup.addEventListener('click', btnPop)