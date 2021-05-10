---
order: 1
title:
  en-US: Advanced Usage
  zh-CN: 高级用法
---

## zh-CN

高级用法,通过effect函数可以实现引导隐藏元素的功能

## en-US

Advanced Usage

``` jsx

import { useRef, useEffect } from 'react';
import { Button } from 'antd';
import { stepGuide } from 'rcui';

export default function Demo() {
  const tour = useRef(null);

  useEffect(() => {
    return exit;
  }, []);

  const startTour = () => {
    tour.current = stepGuide([
      {
        element: '#step1',
        title: '第1步',
        content: '这是第1步',
        placement: 'right',
        useEffect(next, dom) {
          dom.parentNode.style.cssText += 'left:-50px';
          setTimeout(next, 300);
          return () => {
            dom.parentNode.style.cssText += 'left:0px';
          };
        },
      },
      {
        element: '#step2',
        title: '第2步',
        content: '这是第2步',
        placement: 'right',
        useEffect(next, dom) {
          dom.parentNode.style.cssText += 'left:-50px';
          setTimeout(next, 300);
          return () => {
            dom.parentNode.style.cssText += 'left:0px';
          };
        },
      },
      {
        element: '#step3',
        title: '第3步',
        content: '这是第3步,这一步没什么特别的',
      },
    ]);
  };

  const exit = () => {
    const { current } = tour;
    if (!current) return;
    current.exit();
  };
  return (
    <>
      <Button onClick={() => startTour()} type="primary">点我</Button>
      <div style={{ marginLeft: 200 }}>
        <div
          id="step3"
          style={{
            marginLeft: 100,
            whiteSpace: 'nowrap',
            width: 300,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              position: 'relative',
              top: 0,
              left: 0,
              transition: 'left 0.3s',
            }}
          >
            <span style={{
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#ddd',
              padding: 10,
            }}
            >哈哈哈</span>
            <span
              style={{
                display: 'inline-block',
                width: 50,
                backgroundColor: '#f20',
                padding: 10,
                color: '#fff',
              }}
              id="step1"
            >删除</span>
          </div>
        </div>
        <div style={{
          marginLeft: 100,
          whiteSpace: 'nowrap',
          width: 300,
          overflow: 'hidden',
        }}
        >
          <div style={{
            width: '100%',
            position: 'relative',
            top: 0,
            left: 0,
            transition: 'left 0.3s',
          }}
          >
            <span style={{
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#ddd',
              padding: 10,
            }}
            >哈哈哈2</span>
            <span
              style={{
                display: 'inline-block',
                width: 50,
                backgroundColor: '#f20',
                padding: 10,
                color: '#fff',
              }}
              id="step2"
            >删除</span>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<Demo />, mountNode)

```
