## 全局对话框组件 Modal

###　效果预览

![](../../../assest/modal.png)

### 如何使用

提供参数有：

+ title:标题
+ visible：显示和隐藏，默认为false隐藏
+ close:右边的关闭按钮
+ closeModel：关闭按钮的回调
+ style:根据需要改变内容的样式

示例

```jsx
import React from 'react';
import Modal from './modal'

function App() {
  return (
    <div >
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
```

组件依赖

```
{
    "react": "^16.4.2"
}

```

