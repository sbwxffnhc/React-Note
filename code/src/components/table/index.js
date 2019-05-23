import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './style.less'
class Table extends React.Component {
    static defaultProps = {
        selectKey:true,
        addDisabled:false,
        showAdd:true,
  };
    constructor(props){
        super(props)        
        this.state={
            all:0
        }
        this.indexArr=[]
        if(props.dataSource.length>0){
            for(var i =0;i<props.dataSource.length;i++){
            this.indexArr.push(false)
            }
        }
    }
  componentWillReceiveProps(nextProps){
    if(this.props.dataSource!== nextProps.dataSource){
      if(nextProps.dataSource.length>0){
        for(var i =0;i<nextProps.dataSource.length;i++){
          this.indexArr.push(false)
        }
      }
    }
  }

  onChange=(index)=>{
    this.indexArr[index]= !this.indexArr[index]
    this.setState({
      all:this.indexArr.indexOf(false)//-1为全选上了
    })
  }
  
  selectAll=(e)=>{
    for(var i = 0;i<this.indexArr.length;i++){
      this.indexArr[i]= e.target.checked
    }
    this.setState({
      all:e.target.checked?-1:0
    })
  }
  /**返回选择的序号数组 */
  deleteSelect=()=>{
    let arr = []
    this.indexArr.map((item,index)=>{
      if(item===true){
            arr.push(index)
            this.indexArr[index]=false//同时清除当前勾选状态
        }
    })
    this.setState({
      all:0
    })
    this.props.handleDelRule(arr)
  }
  render() {
  const { dataSource,columns,selectKey,showAdd} = this.props;
  let indexArr = this.indexArr
    return (
        <div className="table-box">
            <table>
                <thead>
                    <tr>
                    {selectKey===true?
                        <th><input type="checkbox" checked={this.state.all===-1} onChange={this.selectAll}/></th>:null
                    }{columns.map((item,index)=>{                        
                        return( 
                            <th key={item.key}>{item.title}</th>
                        )})
                    }
                    </tr>
                </thead>

                {dataSource.map((rule,rindex)=>{
                return( 
                <tbody key={`tb-${rindex}`}>
                    <tr>
                    {selectKey===true?
                        <td><input type="checkbox" checked={indexArr[rindex]} 
                        onChange={()=>this.onChange(rindex)}/></td>:null
                    }
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
                {
                showAdd===true || selectKey===true?
                <tfoot>
                    <tr>
                    <td colSpan="16">
                    {showAdd===true?
                    <button className="add" disabled={this.props.addDisabled}>增加</button>:null
                    }
                    {selectKey===true&&dataSource.length>0?
                     <button className="del" onClick={this.deleteSelect}
                        disabled={indexArr.indexOf(true)===-1}>删除所选</button>:null
                    }
                    </td>
                    </tr>
                </tfoot>:null
                }
            </table>
        </div>
    )
    }
}


Table.propTypes = {
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired,
    selectKey:PropTypes.bool,//是否显示多选
    addDisabled:PropTypes.bool,//添加的禁用
    showAdd:PropTypes.bool,//是否显示添加按钮
    handleDelRule:PropTypes.func,
};
  
 
export default Table