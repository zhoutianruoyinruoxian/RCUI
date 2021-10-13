---
category: Components
subtitle: 复制按钮
type: 数据展示
title: CopyButton
order: 2
cols: 2
---

### 说明

复制按钮,可以点击复制目标文本

## API

### AsyncButton

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| targetId |  目标id，需要绑定真实dom的id属性 | string | - |
| id | 按钮本身的id属性，默认随机生成唯一的id，可以自定义 `在同一个页面上使用多个复制按钮时，自定义id需要保证id的唯一性` | string | - |
| ...others | 其他选项，同antd Button组件  | ButtonProps | - |

