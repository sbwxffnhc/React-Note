import React, { Component } from 'react'
import Modal from './index'
import PropTypes from 'prop-types';

class Progress extends React.Component {

    state = {
        visible: false,
        completed: 0,
      };
      
      componentWillUnmount() {
        clearInterval(this.timer);
      }
      componentWillReceiveProps(nextProps) {
        if (nextProps.visble===true) {
          this.handleOpen();
        }
      }
    
      handleOpen = () => {
        this.timer = setInterval(this.progress, 1000);
        this.setState({ visible: true });
      };
    
      handleClose = () => {
        this.setState({ visible: false ,completed:0});
      };
    
      progress = () => {
        const { completed } = this.state;
        const locktime = this.props.locktime
        if (completed === 100) {
          this.handleClose()
          clearInterval(this.timer);
          /**进行重启完清楚登陆信息、跳转到登陆/其他IP，不清除登陆信息，回到当前页面处理 */
          this.props.handleRedirect()
        } else {
          const diff = 100/locktime
          this.setState({ completed: Math.min(completed + diff, 100) });
        }
      };
    render() {
        
    const progress={
        margin: '10px auto',
        borderRadius:'5px',
        height:'20px',
        overflow:'hidden',
        backgroundColor:'#ebebeb'
    }  
    const progressBar={
        float:'left',
        width:`${this.state.completed}%`,
        height:'100%',
        color:'#fff',
        textAlign:'center',
        backgroundColor: '#63a9c7',  
        border:'1px solid #ccc',
        backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)',  
        backgroundSize:'18px 18px'
    }  
    return (
        <Modal
        style={{width:500}}
        visible={this.props.visble}
        > 
            <p>'Restore/Restart... Please do not turn off the device'{parseInt(this.state.completed)}%</p>
            <div style={progress}>  
                <div  style={progressBar}></div>  
                <div style={{position:'absolute',right:'11px'}}>{this.state.completed}%</div>
            </div>  
        </Modal>
    )
    }
}


Progress.propTypes = {
    visble: PropTypes.bool.isRequired,
    locktime:PropTypes.number.isRequired,
    handleRedirect:PropTypes.func.isRequired
  };
  
 
export default Progress