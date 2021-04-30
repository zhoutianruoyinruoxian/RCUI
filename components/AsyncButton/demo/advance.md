---
order: 1
title:
  en-US: advance Usage
  zh-CN: 高级用法
---

## zh-CN

高级用法

## en-US

advance Usage

````ts

import { AsyncButton } from 'rcui';

function Demo() {

  const handleClick: Promise<any> = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  });

  return (<AsyncButton onClick={handleClick} >点击</AsyncButton>
  )
}

ReactDOM.render(<Demo />, mountNode)

````