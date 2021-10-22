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
import { Cascade } from 'rcui';
  
const options = [
  {
    value:'1',
    label:'文本1',
    children:[
      {
        value:'1-1',
        label:'文本1-1',
        children:[
          {
            value:'1-1-1',
            label:'文本1-1-1',
          },
        ],
      },
      {
        value:'1-2',
        label:'文本1-2',
        children:[
          {
            value:'1-2-1',
            label:'文本1-2-1',
          },
        ],
      },
    ]
  },
  {
    value:'2',
    label:'文本2',
  },
  {
    value:'3',
    label:'文本3',
  },
]

function Demo() {

  const [value, setValue] = useState([]);
  const [isLeaf, setIsLeaf] = useState('');

  return (
    <div>
      <Cascade
        value={value}
        options={options}
        onChange={(val, leaf)=>{
          setValue(val);
          setIsLeaf(leaf);
        }}
        category={['第一类', '第二类', '第三类']}
      />
      <br/>
      <div>value: {value.join(',')}</div>
      <div>isLeaf: {isLeaf.toString()}</div>
    </div>
  );
}

ReactDOM.render(<Demo />, mountNode)

```
