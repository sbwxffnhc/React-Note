import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './modal.css'

function Modal(props) {
    const { title, closeModel ,visible,close} = props
    return (
        <div>
            {visible?                
            <div className="modal dialog" >
                <div className={`modal-content`} 
                style={props.style}>
                {close?<div className="close"  onClick={closeModel}>X</div>:null}
                <h3 className="title">{title}</h3>
                    {props.children}
                </div>
            </div>:null
            }
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    close:PropTypes.bool,/**显示右边的关闭按键（现在没有实现关闭功能） */
    visible:PropTypes.bool,/**用于控制样式，显示、隐藏模态框 */
  
  };
  
export default Modal