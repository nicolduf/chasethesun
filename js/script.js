window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
  
    let game


    const audio = document.getElementById('myAudio');
    const playButton = document.getElementById('play-music');

    playButton.addEventListener('click', () => {
      if (audio.paused) {
          audio.play();
          playButton.textContent = 'Pause Music';
      } else {
          audio.pause();
          playButton.textContent = 'Play Music';
      }
      audio.volume = 0.3;
  });


  
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