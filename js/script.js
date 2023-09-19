window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;

    startButton.addEventListener("click", function () {
        startGame();
    });

    restartButton.addEventListener("click", function () {
        restartGame();
    });

    function startGame() {
        console.log("start game");
        game = new Game();

        game.start();
    }

    function restartGame() {
        location.reload();
    }

    function handleKeydown(event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowRight",
        ];

        if (possibleKeystrokes.includes(key)) {
            event.preventDefault();

            switch (key) {
                case "ArrowLeft":
                    game.player.directionX = -1;
                    break;
                case "ArrowRight":
                    game.player.directionX = 1;    
            }
        }
    }

    window.addEventListener("keydown", handleKeydown);
};