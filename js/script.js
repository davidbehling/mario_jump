const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const missel = document.getElementById('missel')

const game_music = document.getElementById('game_music')
const jumpSon = document.getElementById('jump_sound')
const shotSon = document.getElementById('shot')

var shotMissel = true

game_music.play()

const jump = () => {
    if (mario.classList.contains('alive')) {
        mario.classList.add('jump')
        jumpSon.play()
    
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500)
    }
}

function mario_dead(marioPosition) {
    mario.classList.remove('alive')
    mario.style.animation = 'none'
    mario.style.left = `${marioPosition}px`

    mario.src = "./images/game-over.png"
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    jumpSon.src = "./sons/mario-dead.mp3"
    jumpSon.play()

    clearInterval(loop)
    game_music.pause()
}

function mario_explosed() {
    mario.classList.remove('alive')
    mario.style.animation = 'none'
    mario.style.display = 'none'

    missel.src = "./images/explosion4.gif"
    shotSon.src = "./sons/explodcl.mp3"
    shotSon.play()

    clearInterval(loop)
    game_music.pause()

    setTimeout(() => {
        shotSon.pause()
        missel.style.display = 'none'
    }, 2000)
}

function pip_collision(marioPosition, pipePosition) {
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario_dead(marioPosition)
    }
}

function missil_collision(marioPosition, missilPosition, pipePosition) {
    if (missilPosition <= 120 && missilPosition > 0 && marioPosition > 60) {
        missel.style.animation = 'none'
        missel.style.left = `${missilPosition}px`

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario_explosed()
    }
}

function show_missel() {
    if (randomNumber() == 1 && shotMissel == true) { 
        shotMissel = false
        shotSon.play()
        missel.style.display = 'block'
        missel.classList.add('missel_shot')        
    }  
}

const randomNumber = () => {
    return Math.floor(Math.random() *500) + 1
}

missel.addEventListener('animationiteration', () => {
    shotSon.load()
    missel.style.display = 'none'
    missel.classList.remove('missel_shot')
    shotMissel = true
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const misselPosition = missel.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(mario.classList)
    pip_collision(marioPosition, pipePosition)
    missil_collision(marioPosition, misselPosition, pipePosition)
    show_missel()         
}, 10)

// Controles para desktop (teclado)
document.addEventListener('keydown', jump)

// Controles para mobile (toque na tela)
document.addEventListener('touchstart', (e) => {
    e.preventDefault()
    jump()
})

// Alternativa: toque no game-board
const gameBoard = document.querySelector('.game-board')
gameBoard.addEventListener('click', jump)
