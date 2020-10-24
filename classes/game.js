class Game {
  constructor() {
    this.board = new Board();
    this.isRunning = false;
    this.playerX = new Player('X');
    this.playerO = new Player('O');
    this.currentPlayer = '';
    this.thereIsAWinner = false;
    this.winner = '';
    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  start() {
    this.isRunning = true;
    this.currentPlayer = this.playerX.getName();
    this.playerX.setIsPlaying(true);
  }

  reset() {
    this.isRunning = false;
    this.currentPLayer = '';
    this.thereIsAWinner = false;
    this.winner = '';
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  setCurrentPlayer(player) {
    this.currentPlayer = player;
  }

  setThereIsAWinner(value) {
    this.thereIsAWinner = value;
    this.winner = this.currentPlayer;
  }

  getBoard() {
    return this.board.getBoard();
  }

  acknowledgeClick(index, player) {
    this.board.setSquareValue(index, player);
  }

  nextPlayer(player) {
    if(player === this.playerX.getName()) {
      this.currentPlayer = this.playerO.getName();
    } else {
      this.currentPlayer = this.playerX.getName();
    }
  }

  checkForWin() {
    if(this.isRunning && !this.winner) {
      //check for win
      let gameWon = false;
      const boardState = [...this.board.getBoard()].map(sq => sq.value);

      for(let i = 0; i <= 7; i++) {
        const winCondition = this.winningConditions[i];
        let a = boardState[winCondition[0]];
        let b = boardState[winCondition[1]];
        let c = boardState[winCondition[2]];
        if(a === '' || b === '' || c === '') {
          continue;
        }
        if(a === b && b === c) {
          this.isRunning = false;
          this.setThereIsAWinner(true);
          gameWon = true;
          break;
        }
      }
      return this.thereIsAWinner;
    } 
    
    
    /* else if(!this.isRunning && this.winner) {
      playerH3.innerHTML = `${this.winner} has WON! 🏆`;
    }  */

  }


}