---
order: 1
title:
  en-US: Advanced Usage
  zh-CN: 高级用法
---

## zh-CN

可以容纳3个以上的内容

## en-US

Basic Usage

``` jsx

import { MosaicLayout } from 'rcui';

function Demo() {

  return (
    <MosaicLayout>
      <div style={{ backgroundColor: '#ffa39e', height: 100 }}>1</div>
      <div style={{ backgroundColor: '#ffbb96', height: 100 }}>2</div>
      <div style={{ backgroundColor: '#ffd591', height: 100 }}>3</div>
      <div style={{ backgroundColor: '#87e8de', height: 100 }}>4</div>
      <div style={{ backgroundColor: '#d3adf7', height: 100 }}>5</div>
      <div style={{ backgroundColor: '#ffadd2', height: 100 }}>6</div>
    </MosaicLayout>
  )
}

ReactDOM.render(<Demo />, mountNode)

```
