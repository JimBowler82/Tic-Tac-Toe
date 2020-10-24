class Board {
  constructor() {
    this.board = this.populateBoard();
  }

  populateBoard() {
    let newArr = [];
    for(let i = 0; i < 9; i++) {
      newArr.push(new Square(i));
    }
    return newArr;
  }

  getBoard() {
    return this.board;
  }

  setSquareValue(i, player) {
    this.board[i].setValue(player);
  }
}