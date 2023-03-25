import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for (let i=0; i < nrows; i++){
      let newRow = []
      for(let x=0; x<ncols; x++){
        if(Math.floor(Math.random() * 2) === 1){
          // console.log('false')
          

          newRow.push([false,`${i}-${x}`])
        } else {
          // console.log('true')
          newRow.push([true,`${i}-${x}`])
        }
        
      }
      initialBoard.push(newRow)
    }
    // TODO: create array-of-arrays of true/false values
    console.log(initialBoard)
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }










  function flipCellsAround(coord) {
    console.log(coord)
    setBoard(oldBoard => {
      // console.log(coord)
      console.log(oldBoard)
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        // console.log([y, x])
        // console.log( boardCopy)
        let newCopy = []
        for(let x of boardCopy){
          newCopy.push(x)
        }
        // console.log(newCopy)
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          newCopy[y][x][0] = !newCopy[y][x][0];
        }
        // console.log(boardCopy)
        return newCopy
      };
      let it1 = flipCell(y, x, oldBoard)
      let it2 = flipCell(y, x - 1, it1)
      let it3 = flipCell(y, x + 1, it2)
      let it4 = flipCell(y - 1, x, it3)
      let it5 = flipCell(y + 1, x, it4)

      // console.log(it5)
      // console.log(...it5)

    
      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
      
      console.log([...it5])
      return [...it5]
    });

    
  }
  
  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO

  return(
    // <table>
    //   {console.log(board)}
    //   {board.map((i) => {
    //     i.map((a) => <Cell />)
    //   })}
    // </table>
    <table>
      {/* {console.log(board)} */}
      {board.map((i) => <tr>{
      i.map((a) => <Cell isLit={a[0]} key={a[1]} cord={a[1]} flipCellsAroundMe={flipCellsAround} />)
      }</tr>)}
    </table>
  )
}

export default Board;
