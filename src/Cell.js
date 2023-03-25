import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

function Cell({ flipCellsAroundMe, isLit, cord}) {

// The function needs to be changed on the 
// way out so that the react knows about the change

const handleFlipCellsAroundMe = (evt) =>{
  console.log('cell clicked')
  flipCellsAroundMe(cord)
  
}
// console.log(`islit: ${isLit}`)


  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} onClick={handleFlipCellsAroundMe} />;

}

export default Cell;
