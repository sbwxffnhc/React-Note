import React from 'react';
/**用函数代替 React.Component */
function Letter(props) {
  const letterStyle={
    padding:10,
    margin:10,
    backgroundColor:props.bgcolor,
    color:"#333",
    display:"inline-block",
    fontFamily:'monospace',
    fontSize:32,
    textAlign:'center'
  }
  return (
    <div style={letterStyle}>        
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div >
      <Letter bgcolor='#58b3ff'>Y</Letter>
      <Letter bgcolor='#ff605f'>E</Letter>
      <Letter bgcolor='#ffd520'>S</Letter>
    </div>
  );
}

export default App;
