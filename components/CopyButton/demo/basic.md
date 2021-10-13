---
order: 0
title:
  en-US: Basic Usage
  zh-CN: 基本用法
---

## zh-CN

点击按钮后直接将文本复制到粘贴板

## en-US

Basic Usage

``` jsx

import { Space } from 'antd';
import { CopyButton } from 'rcui';

function Demo() {

  return (
    <>
      <p id="copyTarget">这是文本</p>
      <br/>
      <Space>
        <CopyButton targetId="copyTarget" type="primary"/>
        <CopyButton targetId="copyTarget" id="copy">自定义id</CopyButton>
      </Space>
    </>
  )
}

ReactDOM.render(<Demo />, mountNode)

```
