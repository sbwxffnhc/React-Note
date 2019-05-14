import React from 'react';
/**复合组件 */
class Square extends React.Component {
  render() {
    const squareStyle={
      height:150,
      backgroundColor:this.props.bgcolor
    }
    return (
      <div style={squareStyle}>
      </div>
    );
  }
}
class Label extends React.Component {
  render() {
    const labelStyle={
      fontFamily:'sans-serif',
      fontWeight:'bold',
      padding:13,
      margin:0
    }
    return (
      <div style={labelStyle}>
        <p>{this.props.bgcolor}</p>
      </div>
    );
  }
}
class Card extends React.Component {
  render() {    
    const cardStyle={
      height:200,
      width:150,
      backgroundColor:'#FFF',
      webkitFilter:'drop-shadow(0px 0px 5px #666)',
      filter:'drop-shadow(0px 0px 5px #666)',
    }
    return (
      <div style={cardStyle}> 
        <Square bgcolor={this.props.bgcolor}/>
        <Label bgcolor={this.props.bgcolor}/>
      </div>
    );
  }
}

function App() {
  return (
    <div >
      <Card bgcolor='#113913'></Card>
      <Card bgcolor='#913113'></Card>
    </div>
  );
}

export default App;
