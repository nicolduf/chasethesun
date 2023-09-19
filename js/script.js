window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
  
    let game
  
    function startGame() {
      console.log('start game')
      game = new Game()
      game.start()
    }
  
    startButton.addEventListener('click', function () {
      startGame()
    })
  
    restartButton.addEventListener('click', function () {
      game.player.element.remove()
      startGame()
    })
})

document.addEventListener('keydown', event => {
  console.log('down', event)
  if (event.code === 'ArrowLeft') {
    game.player.directionX = -1
  } else if (event.code === 'ArrowRight') {
    game.player.directionX = 1
  }

  document.addEventListener('keyup', event => {
    console.log('up', event)
    if (
      event.code === 'ArrowLeft' ||
      event.code === 'ArrowRight'
    ) {
      game.player.directionX = 0
    }
})
})