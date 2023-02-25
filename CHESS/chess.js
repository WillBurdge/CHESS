// get all the cells of the chessboard
const cells = document.querySelectorAll('.chessboard td');

// initialize the selected piece and its valid moves
let selectedPiece = null;
let validMoves = [];

// add event listeners to the cells
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // if a piece is already selected, move it to the clicked cell if it's a valid move
    if (selectedPiece && validMoves.includes(cell.id)) {
      cell.innerHTML = selectedPiece.innerHTML;
      selectedPiece.innerHTML = '';
      selectedPiece = null;
      validMoves = [];
    }
    // if no piece is selected, select the clicked piece and highlight its valid moves
    else if (cell.innerHTML) {
      selectedPiece = cell;
      validMoves = getValidMoves(cell.id);
      validMoves.forEach(move => {
        document.getElementById(move).style.backgroundColor = 'yellow';
      });
    }
    // if an empty cell is clicked, deselect the selected piece and remove the highlights
    else {
      selectedPiece = null;
      validMoves.forEach(move => {
        document.getElementById(move).style.backgroundColor = '';
      });
      validMoves = [];
    }
  });
});

// function to get the valid moves of a piece
function getValidMoves(cellId) {
  // TODO: implement this function
}

