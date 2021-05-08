---
order: 1
title:
  en-US: Basic Usage
  zh-CN: 内置图标
---

## zh-CN

里面可以包含React. Node类型

## en-US

Basic Usage

``` jsx

import { useState } from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Ellipsis } from 'rcui';

function Demo() {

  const [text, setText] = useState('短文本');
  return (
    <div>
      <div style={{ width: 100, backgroundColor: '#ddd', padding: '2px 6px' }}>
        <Ellipsis
          content={
            <>
              <DeleteOutlined />
              <span>{text}</span>
            </>
          }
        />
      </div>
      <br />
      <Button onClick={() => setText('短文本')}>短文本</Button>&nbsp;&nbsp;
      <Button type="primary" onClick={() => setText('这是长文本这是长文本这是长文本这是长文本')}>长文本</Button>
    </div>
  );
}

ReactDOM.render(<Demo />, mountNode)

```
