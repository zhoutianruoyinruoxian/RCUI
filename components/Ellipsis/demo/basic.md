---
order: 0
title:
  en-US: Basic Usage
  zh-CN: 基本用法
---

## zh-CN

基本用法

## en-US

Basic Usage

``` jsx

import { useState } from 'react';
import { Button } from 'antd';
import { Ellipsis } from 'rcui';

function Demo() {
  const [text, setText] = useState('短文本');

  return (
    <div>
      <div style={{ width: 70, backgroundColor: '#ddd', padding: '2px 6px' }}>
        <Ellipsis content={text} />
      </div>
      <br />
      <Button onClick={() => setText('短文本')}>短文本</Button>&nbsp;&nbsp;
      <Button type="primary" onClick={() => setText('这是长文本这是长文本这是长文本这是长文本')}>长文本</Button>
    </div>
  );
}

ReactDOM.render(<Demo />, mountNode)

```
