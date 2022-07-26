const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btn = document.querySelector("#refresh");


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    },500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 90 && pipePosition > 0 && marioPosition < 90) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; 

        mario.src = 'mario-jump-images/gif-explosion-10.gif'
        mario.style.width = '55px';
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);


btn.addEventListener("click", function() {
    
    location.reload();
});



document.addEventListener('click', jump);
