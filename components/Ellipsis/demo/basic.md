---
order: 0
title:
  en-US: Basic Usage
  zh-CN: 基本用法
---

## zh-CN

里面可以包含React.Node类型

## en-US

Basic Usage

````jsx

import { useState } from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Ellipsis } from 'rcui';

function Demo() {
  const [text, setText] = useState('可以是个React.Node');
  return (
    <>
      <div style={{ width: 70, backgroundColor: '#ddd', display: 'flex' }}>
        <DeleteOutlined />
        <Ellipsis content={text} />
      </div>
      <div style={{ width: 100, backgroundColor: '#ddd' }}>
        <Ellipsis content={<span><DeleteOutlined style={{ float: 'left' }} />{text}</span>} />
      </div>
      <Button onClick={() => setText('哈哈哈')}>短文本</Button>
      <Button type="primary" onClick={() => setText('我好长哈哈哈哈哈哈哈哈哈哈哈哈哈哈')}>长文本</Button>
    </>
  );
}

ReactDOM.render(<Demo />, mountNode)

````
