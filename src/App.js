import React from 'react';
import './App.css';

 
function App() {

  function Cell() {
    return (
      <span className="cell"></span>
    )
  }

  function GenerateBoard() {
    let list =[];
    let tempStyle = {
      display: "none",
    }
    for(let i = 0; i < 8; ++i) {
        for(let j = 0; j < 8; ++j) {
            list.push(<Cell/>);
        }
        list.push(<span style={tempStyle}></span>);
    }
    return list;
  }
  
  
  
  return (
    <div className="board">
      <GenerateBoard/>
    </div>
  );
}

export default App;
