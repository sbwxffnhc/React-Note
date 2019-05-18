import React, { Component } from 'react'
import Modal from './index'
import PropTypes from 'prop-types';

class Confirm extends React.Component {
    
    render() {
      const contentStyle={        
        fontSize: '23px',
        textAlign:'center',
        fontFamily: 'monospace',
      }
      const button1={
        width: '130px',
        marginTop: '40px',
        float: 'left',
        padding: '5px 10px',
        fontSize: '12px',
        lineHeight: '1.5',
        borderRadius:' 3px',
        color: '#fff',
        backgroundColor: '#da2e2e',
        display: 'inline-block',
        padding: '6px 12px',
        cursor: 'pointer',
        border: '1px solid #e61f1f',
        borderRadius: '4px',
      }
      const button2={
        width: '130px',
        float: 'right',
        marginTop: '40px',
        padding: '5px 10px',
        fontSize: '12px',
        lineHeight: '1.5',
        borderRadius:' 3px',
        color: '#fff',
        backgroundColor: '#aba5a5',
        display: 'inline-block',
        padding: '6px 12px',
        cursor: 'pointer',
        border: '1px solid #acacac',
        borderRadius: '4px',
      }
      
    return (
        <Modal
        style={{width:400}}
        visible={this.props.visble}
        > 
        <div style={contentStyle}>
        {this.props.children}
        </div>
        <button style={button1} onClick={this.props.handleOk}>OK</button>
        <button style={button2} onClick={this.props.handleCancel}>cancel</button>
        </Modal>
    )
    }
}


Confirm.propTypes = {
  visble: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
  
 
export default Confirm