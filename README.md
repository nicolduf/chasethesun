# chasethesun
[Chase the Sun] (http://nicolduf.github.io/chasethesun/)

# Description

Help the dog get a tan! By using the arrow keys, move left and right to catch the suns and dosge the raindrops.

# MVP

- A game with a start, game, and game over page - all on one HTML page.
- Lives deducted if you collide with a raindrop or miss a sun.
- Score added if you collide with a sun.

# Techs Used

- HTML
- CSS
- Javascript
- DOM Manipluation

# Data Structure

## game.js

- start()
- gameLoop()
- update()

## obstacle.js

- constructor(gameScreen, left, top, height, width)
- move()
- updatePosition()

## player.js

- constructor(gameScreen, left, top, height, width)
- move()
- updatePosition()
- didCollide(obstacle)

## suns.js

- constructor(gameScreen, left, top, height, width)
- move()
- updatePosition()
