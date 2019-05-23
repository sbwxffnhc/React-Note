# Table组件

+ 当有大量结构化的数据需要展现时；

+ 拥有增加，删除，多选操作，自定义操作的表格

## 效果预览

![1558597016123](../../../assest/table.png)

## 如何使用(如./demo.js)

``` js
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
    handleDelRule=(indexArr)=>{
        //根据自己想要的数据进行组合
        let delIndex = []
        indexArr.map((item,index)=>{
            delIndex.push(rules[item].index)
        })        
        console.log(indexArr,delIndex)
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
        <button className='button-del' onClick={()=>this.handleDelRule([index])}>Delete</button>
        </td>
      ),
    },
  ];
  return (
    <div >
      TABLE
        <Table columns={columns}
        handleDelRule={this.handleDelRule}
        dataSource={rules}></Table>
    </div>
  );}
}

export default App;

```

## Table API

| 参数          | 说明                               | 类型                                  | 默认值 |
| :------------ | :--------------------------------- | :------------------------------------ | :----- |
| columns       | 表格列的配置描述，具体项见上面示例 | [ColumnProps](https://git.io/vMMXC)[] | -      |
| dataSource    | 数据数组                           | any[]                                 |        |
| selectKey     | 展开的行，控制属性                 | string[]                              |        |
| showAdd       | 显示添加按键                       | boolean                               | true   |
| addDisabled   | 是否禁用添加按键                   | boolean                               | false  |
| handleDelRule | 删除函数                           | func                                  |        |


## 组件依赖

``` json
{
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    
}
```

样式选用less来显示，react+webpack如何支持less,请看文章 ：https://juejin.im/post/5ce5fde35188252dbb08bb97>

***注意：在看table/index.js觉得不知所云时，可以看原始的文档./mini-table.js，这是未转为独立组件的示例***