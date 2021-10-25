---
order: 2
title:
  en-US: Basic Usage
  zh-CN: 异步请求数据
---

## zh-CN

异步请求数据

## en-US

Basic Usage

``` jsx

import { useState } from 'react';
import { Cascade } from 'rcui';
  
const optionLists = [
  {
    value:'1',
    label:'文本1',
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

  const [options, setOptions] = useState(optionLists);
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState([]);
  const [isLeaf, setIsLeaf] = useState('');

  const getData = (targetOption)=>{
    
    // const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    setTimeout(()=>{
      targetOption.loading = false;
      targetOption.children = [
        {
          label: '新增的数据1122',
          value: '1122',
        },
        {
          label: '新增的数据2233',
          value: '2233',
        },
      ];
      setOptions([...options]);
    }, 1000);
  }

  return (
    <div>
      <Cascade
        // value={value}
        options={options}
        onChange={(val, leaf)=>{
          setValue(val);
          setIsLeaf(leaf);
        }}
        loadData={getData}
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
