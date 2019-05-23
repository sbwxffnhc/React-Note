import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './style.less'
const rule= [
    {
      "index": 0,
      "ipaddr": "192.168.0.100",
      "protocol": "TCP+UDP",
      "externalportfrom": 2000,
      "externalportto": 2010,
      "internalportfrom": 3000,
      "internalportto": 3010,
      "comment": "abc123"
    },
    {
      "index": 1,
      "ipaddr": "192.168.0.101",
      "protocol": "TCP",
      "externalportfrom": 2020,
      "externalportto": 2030,
      "internalportfrom": 3020,
      "internalportto": 3030,
      "comment": "abc123"
    },
  ]
class Table extends React.Component {
    
    render() {

    return (
        <div className="table-box">
            <table>
                <thead>
                    <tr>                        
                    <th><input type="checkbox" value=""/></th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>电话</th>
                    <th>操作</th>
                    </tr>
                </thead>
                <tbody key={rule.index}>
                    <tr>
                    <td><input type="checkbox"  value=""/></td>
                    <td >{rule.index}</td>
                    <td >{rule.ipaddr}</td>
                    <td >{rule.protocol}</td>
                    <td >{rule.externalportfrom}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <td colSpan="16">
                    <button className="add">增加</button>
                    <button className="del">删除所选</button>
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