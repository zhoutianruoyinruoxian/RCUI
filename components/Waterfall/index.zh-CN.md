---
category: Components
subtitle: 瀑布流
type: 数据展示
title: Waterfall
order: 2
cols: 2
---
### 说明

异步按钮，无需手动设置loading，只需返回一个promise，AsyncButton会自动根据promise的状态触发loading。

## API

### Waterfall

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| onClick |  点击按钮时的回调 | (event) => void \| Promise | - |
| delay | 延迟时间(毫秒) | number | - |
| ...others | 其他选项，同antd Button组件  | ButtonProps | - |
