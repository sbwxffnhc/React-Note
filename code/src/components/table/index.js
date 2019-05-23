import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './style.less'
class Table extends React.Component {
    
  state={
    indexArr:[],
    all:0
  }
  componentWillReceiveProps(nextProps){
    if(this.props.rules!== nextProps.rules){
      let indexArr=[]
      if(nextProps.rules.length>0){
        for(var i =0;i<nextProps.rules.length;i++){
          indexArr[i]=false
        }
        this.setState({
          indexArr:indexArr,
        })
      }
    }
  }

  onChange=(index)=>{
    let indexArr = this.state.indexArr
    indexArr[index]= !indexArr[index]
    this.setState({
      indexArr:indexArr,
      all:indexArr.indexOf(false)//-1为全选上了
    })
  }
  
  selectAll=(e)=>{
    let indexArr= this.state.indexArr
    for(var i = 0;i<indexArr.length;i++){
      indexArr[i]= e.target.checked
    }
    this.setState({
      indexArr:indexArr,
      all:e.target.checked?-1:0
    })
  }
  deleteSelect=(rules)=>{
    let {indexArr} = this.state
    let arr = []
    indexArr.map((item,index)=>{
      if(item===true)
        arr.push(rules[index].index)
    })
    this.setState({
      all:0
    })
    this.props.handleDelRule(arr)
  }
  render() {
  const { rules,columns} = this.props;
  let {indexArr} = this.state
    return (
        <div className="table-box">
            <table>
                <thead>
                    <tr>                        
                    <th><input type="checkbox" checked={this.state.all===-1} onChange={this.selectAll}/></th>
                    {columns.map((item,index)=>{                        
                        return( 
                            <th key={item.key}>{item.title}</th>
                        )})
                    }
                    </tr>
                </thead>

                {rules.map((rule,rindex)=>{
                return( 
                <tbody key={`tb-${rindex}`}>
                    <tr>
                    <td><input type="checkbox" checked={indexArr[rindex]} 
                        onChange={()=>this.onChange(rindex)}/></td>
                        {columns.map((item,cindex)=>{
                            if(item.render) return item.render(rindex,rule)             
                            return( 
                                <td key={`tb-${cindex}`}>{rule[item.dataIndex]}</td>
                            )})
                        }
                    </tr>
                </tbody>
                )})
                }
                <tfoot>
                    <tr>
                    <td colSpan="16">
                    <button className="add" disabled>增加</button>
                    {rules.length>0?
                     <button className="del" onClick={()=>this.deleteSelect(rules)}
                        disabled={indexArr.indexOf(true)===-1}>删除所选</button>:null
                    }     
                    </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
    }
}


Table.propTypes = {
};
  
 
export default Table