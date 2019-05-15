import React from 'react';
import Notice from './icon-use'
import Modal from './modal'
import Progress from './modal/progress'

class App extends React.Component {
  state={
    visble:false
  }
  handleRestart=()=>{
    this.setState({
      visble:!this.state.visble
    })
  }
  render() {
  return (
    <div >
      <button onClick={this.handleRestart}>Restart</button>
        <Progress 
            visble={this.state.visble} 
            locktime={20}
            handleRedirect={this.handleRestart}/>
    </div>
  );}
}

export default App;
