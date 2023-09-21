window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
  
    let game


    let play = document.getElementById("play-music");

    function playMusic() {
      audio = new Audio("GAME MUSIC.mp3");
      audio.play()
    }
    play.addEventListener("click", playMusic)
    
    function stopAudio() {
      audio.pause();
      audio.currentTime = 0;
    }
    play.addEventListener("click2", stopAudio)
    

  
    function startGame() {
      console.log('start game')
      game = new Game()
      game.start()
    }
  
    startButton.addEventListener('click', function () {
      startGame()
    })
  
    restartButton.addEventListener('click', function () {
      location.reload()
    })


document.addEventListener('keydown', event => {
  console.log('down', event, game.player)
  if (event.code === 'ArrowLeft') {
    game.player.directionX = -1
  } else if (event.code === 'ArrowRight') {
    game.player.directionX = 1
  }
})

document.addEventListener('keyup', event => {
  console.log('up', event)
    game.player.directionX = 0
  })

})