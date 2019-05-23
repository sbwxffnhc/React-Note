import React from 'react';
/**组件的属性传值机制
 * 使用{...this.props}来解决属性改动而多处改动的情况
 */
class Display extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
      </div>
    );
  }
}
class Label extends React.Component {
  render() {
    return (<Display {...this.props}/>
       /*  <Display color={this.props.color}
      num={this.props.num}
      size={this.props.size}>
      </Display>*/
    );
  }
}
class Shirt extends React.Component {
  render() {    
    return (<Label {...this.props}/>
    /*  <Label color={this.props.color}
      num={this.props.num}
      size={this.props.size}>
    </Label>*/
    );
  }
}

function App() {
  return (
    <div >
      <Shirt color={'#fde'}
      num={5}
      size={'max'}/>
    </div>
  );
}

export default App;
