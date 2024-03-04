import "./App.css";
import { useState } from 'react';

function Square({value,onSquareClick}){

<button className="square" onClick={()=>onSquareClick()}>
  {value}
</button>
};

export default function Board(){
  
const[squares,setSquares]=useState(Array(9).fill(null))

};