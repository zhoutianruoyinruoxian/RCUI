import React, { Component } from 'react';
import { Layout, Menu, Input } from 'antd';
import './style.scss';

const { Header } = Layout;

interface Iprops {
}

export default class MainHeader extends Component<Iprops, any> {

  headerMenu = () => (
    <Menu mode="horizontal">
      <Menu.Item key="document">文档</Menu.Item>
      <Menu.Item key="component">组件</Menu.Item>
    </Menu>
  );

  render() {
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
          {this.headerMenu()}
        </div>
      </div>
    );
  }
}
