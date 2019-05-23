import React from 'react';
import {Tree,Progress,Modal,Toast,Confirm} from './components'
import Table from './components/table'
var tree = {
  title: "American Government System",
  childNodes: [
    {
      title: "Legislative", childNodes: [
        {
          title: "Congress", childNodes: [
            { title: "Agencies" }
          ]
        }
      ]
    },
    {
      title: "Executive", childNodes: [
        {
          title: "President", childNodes: [
            { title: "Cabinet" },
            { title: "Exec Office Of The President" },
            { title: "Vice-president" },
            {
              title: "Independent Agencies", childNodes: [
                { title: "Agriculture" },
                { title: "Commerce" },
                { title: "Defense" },
                { title: "Education" },
                { title: "......" }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judicial", childNodes: [
        {
          title: "Supreme Court", childNodes: [
            { title: "Lower Courts" }
          ]
        }
      ]
    }
  ]
};

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

    <Table></Table>
    </div>
  );}
}

export default App;
