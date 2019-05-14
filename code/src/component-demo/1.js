import React from 'react';
/**Simple Component */
class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.letterStyle={
      padding:10,
      margin:10,
      backgroundColor:this.props.bgcolor,
      color:"#333",
      display:"inline-block",
      fontFamily:'monospace',
      fontSize:32,
      textAlign:'center'
    }
  }
  render() {    
    return (
      <div style={this.letterStyle}>        
        {this.props.children}
      </div>
    );
  }
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
