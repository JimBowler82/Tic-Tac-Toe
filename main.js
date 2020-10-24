const gridArea = document.querySelector('#gridArea');
const playerH3 = document.querySelector('#player');
const resetBtn = document.querySelector('#reset');
let game;

resetBtn.addEventListener('click', resetGame);

function startGame() {
  game = new Game();
  const squares = game.getBoard();
  game.start();
  renderBoard(squares);
}

function renderBoard(squares) {
  console.log(squares);
  playerH3.innerText = `Player${game.getCurrentPlayer()} make your choice!`;
  for(let i = 0; i < squares.length; i++) {
    const div = squares[i].self;
    if(squares[i].value === 'X') {div.classList.add('playerX');}
    if(squares[i].value === 'O') {div.classList.add('playerO');}
    if(!squares[i].isClicked) {
      div.addEventListener('click', handleClick);
    }
    
    gridArea.appendChild(div);
  }
}

function handleClick(e) {
  const square = e.target;
  square.removeEventListener('click', handleClick);
  const index = square.attributes[0].nodeValue;
  game.acknowledgeClick(index, game.getCurrentPlayer());
  renderBoard(game.getBoard());
  checkWinAndContinue();
}

function checkWinAndContinue() {
  if(game.checkForWin()) {
    const squares = document.querySelectorAll('.grid div');
    squares.forEach(sq => sq.removeEventListener('click', handleClick));
    playerH3.innerHTML = ` Player${game.getCurrentPlayer()} has won! 🏆`;
  } else {
    game.nextPlayer(game.getCurrentPlayer());
    playerH3.innerText = `Player${game.getCurrentPlayer()} make your choice!`;
  }
}

function resetGame() {
  gridArea.innerHTML = '';
  startGame();
}

// Launch game on pageload
startGame();



