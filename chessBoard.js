

const chessBoard = {
  board: '',
  makeABoard: function() {
    for (let i = 0; i < 8; i++) {
      for (let a = 0; a < 8; a++) {
        this.board += (a % 2) === (i % 2) ? " ": "#"
        /*  if (a % 2 === i % 2) {
            this.board += " "
          } else {
            this.board += "#"
              }; */
              }
        this.board += "\n";
        }
      this.showBoard();
    },
  showBoard: function() {
    console.log(chessBoard.board);
  }
}
