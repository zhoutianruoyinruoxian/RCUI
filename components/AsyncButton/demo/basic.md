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

import { AsyncButton } from 'rcui';

function Demo() {

  const handleClick = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  });

  return (<AsyncButton onClick={handleClick} type="primary" >点击</AsyncButton>
  )
}

ReactDOM.render(<Demo />, mountNode)

```
