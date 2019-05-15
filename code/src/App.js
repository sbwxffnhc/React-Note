import React from 'react';
import Notice from './icon-use'
import Modal from './modal'
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
      <Notice type='warning' content="本操作会导致重启！" />
      

      <Modal
        title={'Title'}
        style={{width:300}}
        visible={true}
        close={true}
        >        
          123
        </Modal>
    </div>
  );
}

export default App;
