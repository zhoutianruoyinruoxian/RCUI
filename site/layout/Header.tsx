import React, { } from 'react';
import { Menu } from 'antd';

interface Iprops {
}

export default function Header() {

  const headerMenu = () => (
    <Menu mode="horizontal">
      <Menu.Item key="document">文档</Menu.Item>
      <Menu.Item key="component">组件</Menu.Item>
    </Menu>
  );

  return (
    <div className="main-header">
      <a className="main-header-logo" >
        {/* <img src={logo} width="140" height="48" /> */}
        <span>RCUI</span>
      </a>
      <div className="main-header-left">
        {/* <Input.Search placeholder="搜索暂不可用" /> */}
      </div>
      <div className="main-header-right">
        {headerMenu()}
      </div>
    </div>
  );
}
