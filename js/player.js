class Player {
  constructor(gameScreen, left, top, height, width) {
    this.gameScreen = gameScreen
    this.left = left
    this.top = top
    this.height = height
    this.width = width
    this.directionX = 0
    this.directionY = 0
    this.element = document.createElement('img')

    this.element.src = 'images/PLAYER.png'

    this.element.style.position = 'absolute'
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
  }

  move() {
    this.updatePosition()
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
  }

  updatePosition() {
    console.log("hello", this.directionX);
    this.left += this.directionX
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect()
    const obstacleRect = obstacle.element.getBoundingClientRect()

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true
    } else {
      return false
    }
  }



}  