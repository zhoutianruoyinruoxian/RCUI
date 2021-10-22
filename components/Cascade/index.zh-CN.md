---
category: Components
subtitle: 级联选择
type: 特殊交互
title: Cascade
order: 0
cols: 2
---

### 说明

这是一个单行文本超出自动隐藏组件，隐藏内容放入popover中hover显示

## API

注：每选中一个节点都会触发onChange事件，可以通过onChange事件的isLeaf参数获取是否为叶子节点

### AsyncButton

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| content |  内容 | React.Node | - |
| placement | 位置，参考antd的Popover | PopoverProps['placement'] | top |
