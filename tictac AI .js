function ticTacToe() {
    // State space
    let gameBoard = new Array(9).fill(null);
    let players = ['X', 'O'];
    let nextPlayerIndex = 1;
    let gameOver = false;
  
    // Computations
    while (!gameOver) {
      nextPlayerIndex = (nextPlayerIndex + 1) % 2;
      currentPlayerSymbol = players[nextPlayerIndex];
      gameBoard = makeAMove(gameBoard, currentPlayerSymbol);
      gameOver = isGameOver(gameBoard, currentPlayerSymbol);
      updateGameBoard(gameBoard);
    }
  }
  
  function printBoard(gameBoard) {
    let gameString = '';
    for (let i = 0; i <= 6; i += 3) {
      gameString += `${gameBoard[i] ?? i+1}${gameBoard[i+1] ?? i+2}${gameBoard[i+2] ?? i+3}\n`;
    }
    return gameString;
  }
  
  function getUserInput(nextPlayerSymbol, gameBoard) {
    let coordinates;
    do {
      coordinates = prompt(`Board:\n${printBoard(gameBoard)} Enter your next move (1-9) :`);
      if (coordinates === null) {
        return null;
      }
      coordinates = +coordinates;
    } while (
      typeof coordinates !== 'number' ||
      coordinates < 1 ||
      coordinates > 9 ||
      gameBoard[coordinates - 1] !== null
    );
    return coordinates;
  }
  
  function isMoveValid(coordinates, gameBoard) {
    return (
      typeof coordinates === 'number' &&
      coordinates >= 1 &&
      coordinates <= 9 &&
      gameBoard[coordinates - 1] === null
    );
  }
  
  function makeAMove(gameBoard, nextPlayerSymbol) {
    const newGameBoard = JSON.parse(JSON.stringify(gameBoard));
    let coordinates;
    do {
      coordinates = getUserInput(nextPlayerSymbol, gameBoard);
      if (coordinates === null) {
        return null;
      }
    } while ( !isMoveValid(coordinates, gameBoard) );
    newGameBoard[coordinates - 1] = nextPlayerSymbol;
    return newGameBoard;
  }
  
  function hasLastMoverWon(lastMove, gameBoard) {
    let winnerCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [i1, i2, i3] of winnerCombos) {
      if (
        gameBoard[i1] === lastMove &&
        gameBoard[i1] === gameBoard[i2] &&
        gameBoard[i1] === gameBoard[i3]
      ) {
        return true;
      }
    }
    return false
};