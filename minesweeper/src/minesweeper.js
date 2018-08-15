const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
 let board = [];
 for(var i=0; i<numberOfRows;i++){
   var row=[];
   for(var j=0; j<numberOfColumns;j++){
     row.push(' ');
   }
   board.push(row);
 }
 return board;
};

generatePlayerBoard(2,4);

const generateBombBoard = (numberOfRows, numberOfColumns,numberOfBombs) => {
 let board = [];
 for(var i=0; i<numberOfRows;i++){
   var row=[];
   for(var j=0; j<numberOfColumns;j++){
     row.push(null);
   }
   board.push(row);
 }
 let numberOfBombsPlaced = 0;
 while(numberOfBombsPlaced < numberOfBombs){
   let randomRowIndex = Math.floor(Math.random()*numberOfRows);
   let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
   board[randomRowIndex][randomColumnIndex] = 'B';
   numberOfBombsPlaced++;
   //after learning control flow, i'll fix potential placing bombs on top of other bombs
 }
 return board;
}

let printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);
