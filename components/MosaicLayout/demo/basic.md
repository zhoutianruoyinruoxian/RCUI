---
order: 0
title:
  en-US: Basic Usage
  zh-CN: 基本用法
---

## zh-CN

鼠标放在两个内容框中间进行左右拖动来调整布局,初始布局根据内容的大小自动排版

## en-US

Basic Usage

``` jsx

import { MosaicLayout } from 'rcui';

function Demo() {

  return (
    <MosaicLayout>
      <div style={{ backgroundColor: '#ddd', height: 100 }}>这是第一个内容框，这里的内动一半多</div>
      <div style={{ backgroundColor: '#999', height: 100 }}>这是第二个内容框，这里的内容比较多，这是第二个内容框，这里的内容比较多</div>
      <div style={{ backgroundColor: '#ddd', height: 100 }}>这是第三个内容框</div>
    </MosaicLayout>
  )
}

ReactDOM.render(<Demo />, mountNode)

```
