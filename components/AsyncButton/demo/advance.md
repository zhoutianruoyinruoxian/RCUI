---
order: 1
title:
  en-US: set loading delay
  zh-CN: 设置loading延迟
---

## zh-CN

可以设置`delay`属性，延迟`loading`

## en-US

advance Usage

``` jsx

import { AsyncButton } from 'rcui';

function Demo() {

  const handleClick = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  });

  return (
    <AsyncButton
      delay={1000}
      onClick={handleClick}
      type="primary"
    >延迟loading</AsyncButton>
  )
}

ReactDOM.render(<Demo />, mountNode)

```
