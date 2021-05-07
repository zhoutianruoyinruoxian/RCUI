---
order: 1
title:
  en-US: advance Usage
  zh-CN: 高级用法
---

## zh-CN

这是高级用法

## en-US

advance Usage

````jsx

import { AsyncButton } from 'rcui';

function Demo() {

  const handleClick: Promise<any> = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  });

  return (<AsyncButton onClick={handleClick} >高级用法</AsyncButton>
  )
}

ReactDOM.render(<Demo />, mountNode)

````