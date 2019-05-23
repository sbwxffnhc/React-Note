import React from 'react';
import {Table,Modal} from '../index'
const rules= [
    {
      "index": 3,
      "ipaddr": "192.168.0.100",
      "protocol": "TCP+UDP",
      "externalportfrom": 2000,
    },
    {
      "index": 1,
      "ipaddr": "192.168.0.101",
      "protocol": "TCP",
      "externalportfrom": 2020,
    },
  ]


class App extends React.Component {
    handleEdit=(index)=>{
        console.log(index)
    }
  render() {
      
const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'IP',
      dataIndex: 'ipaddr',
      key: 'ipaddr',
    },
    {
      title: '协议',
      dataIndex: 'protocol',
      key: 'protocol',
    },
    {
      title: '外部端口',
      dataIndex: 'externalportfrom',
      key: 'externalportfrom',
    },
    {
      title: '操作',
      key: 'action',
      render: (index,record) => (
        <td key='actiontd'>
        <button className='button-del' onClick={()=>this.handleEdit(index)}>EDIT</button>
        <button className='button-del' onClick={()=>this.handleDelRule([record.index])}>Delete</button>
        </td>
      ),
    },
  ];
  return (
    <div >
      TABLE
        <Table columns={columns}
        rules={rules}></Table>
    </div>
  );}
}

export default App;
