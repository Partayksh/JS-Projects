const gameCell = document.querySelectorAll('.cell');
const Player1 = document.querySelector('.player1');
const Player2 = document.querySelector('.player2');
const restartBtn = document.querySelector('.restartbtn');
const alert = document.querySelector('.alert');

//  Main Logic 
let currentPlayer = 'X';
let nextPlayer = 'O';
let playerTurn = currentPlayer;
Player1.textContent = `Player 1 : ${playerTurn}`;
Player2.textContent = `Player 2 : ${nextPlayer}`;

// Start Game Logic
const startGame = () => {
    currentPlayer = 'X';
    nextPlayer = 'O';
    playerTurn = currentPlayer;
    gameCell.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (e.target.textContent === "") {
                e.target.innerText = playerTurn;
                if (isWinGame()) {
                    showAlert(`${playerTurn} Won the Game`);
                    endGame();
                }
                else if (isTie()) {
                    showAlert(`The Game is Tie`);
                    endGame();
                }
                else {
                    changePlayer();
                    showAlert(`Now is your Turn : ${playerTurn} `);
                }

            }
        })
    })
}

// Change Player Logic
const changePlayer = () => {

    if (playerTurn === currentPlayer) {
        playerTurn = nextPlayer;
    }
    else if (playerTurn === nextPlayer) {
        playerTurn = currentPlayer;
    }

}
// Winning Logic
const isWinGame = () => {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 9], [2, 4, 6], [0, 4, 8]
    ]
    for (let index = 0; index < winConditions.length; index++) {
        let [pos1, pos2, pos3] = winConditions[index];

        if (gameCell[pos1].textContent !== "" && gameCell[pos1].textContent === gameCell[pos2].textContent && gameCell[pos2].textContent === gameCell[pos3].textContent) {
            return 1;
        }
    }
    return 0;
}

//  Is Game Tie Logic
const isTie = () => {
    let emptyCell = 0;
    gameCell.forEach(cell => {
        if (cell.textContent === '') {
            emptyCell++;
        }
    })

    return emptyCell === 0 && !isWinGame();

}
// Game End Logic

function endGame() {
    gameCell.forEach(cell => {
        cell.style.backgroundColor = 'gray';
    })

    playerTurn = '';
    changePlayer = '';
    nextPlayer = '';

}

// Alert 
const showAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(function () {
        alert.style.display = "none";
    }, 5000);
}

// Restart Game Logic
restartBtn.addEventListener('click', () => {
    gameCell.forEach((cell) => {
        cell.textContent = '';
        cell.style.backgroundColor = '';
    })
    startGame();
})

// Independent Call to Start Function
startGame();