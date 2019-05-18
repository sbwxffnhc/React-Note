import React from 'react';
import Toast from './toast'
import Modal from './modal'
import Confirm from './modal/confirm'
import Progress from './modal/progress'

class App extends React.Component {
  state={
    visble:false
  }
  handleShow=()=>{
    this.setState({visble:true})
  }
  handleConfirm=()=>{
    //do
    this.setState({visble:false})
  }
  handleCancel=()=>{
    this.setState({visble:false})
  }
  render() {
  return (
    <div >
    <button onClick={this.handleShow}>show</button>
    <Confirm visble={this.state.visble}
    handleOk={this.handleConfirm}
    handleCancel={this.handleCancel}>
    Sure to restart the service</Confirm>
    </div>
  );}
}

export default App;
