const chessBoard = {
  board: '',
  makeABoard: function() {
    for (let i = 0; i <= 7; i++) {
      for (let a = 0; a <= 7; a++) {
        this.board += a % 0 === i % 0 ? " ": "#"
          if (a % 2 === i % 2) {
            this.board += " "
          } else {
            this.board += "#"
              };
          }
        this.board += "\n";
        }
      this.showBoard();
    },
  showBoard: function() {
    console.log(chessBoard.board);
  }
}
