---
order: 1
title:
  en-US: open select all
  zh-CN: 开启全选功能
---

## zh-CN

选中全部，等同于选择上一级

## en-US

open select all

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

  const [value,setValue] = useState([]);
  const [isLeaf, setIsLeaf] = useState('');

  return (
    <div>
      <Cascade
        showAll
        value={value}
        options={options}
        onChange={(val, leaf)=>{
          setValue(val);
          setIsLeaf(leaf);
        }}
      />
      <br/>
      <div>value: {value.join(',')}</div>
      <div>isLeaf: {isLeaf.toString()}</div>
    </div>
  );
}

ReactDOM.render(<Demo />, mountNode)

```
