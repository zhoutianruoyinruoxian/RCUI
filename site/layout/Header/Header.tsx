import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PageContext } from 'site/App';
import type { BasicProps } from '../types';
import './style.scss';

interface HeaderProps extends BasicProps {
}

export default function Header() {
  const { menuList, prefixCls } = useContext(PageContext);

  const renderNav = () => menuList.map(({ name, path }) => (
    <li
      key={path}
      className={`${prefixCls}-header-nav-list`}
    >
      <NavLink to={path} >{name}</NavLink>
    </li>
  ));

  return (
    <div className={`${prefixCls}-header`}>
      <Link className={`${prefixCls}-header-logo`} to="/" >
        {/* <img src={logo} width="140" height="48" /> */}
        <span>RCUI</span>
      </Link>
      <div className={`${prefixCls}-header-left`}>
        {/* <Input.Search placeholder="搜索暂不可用" /> */}
      </div>
      <ul className={`${prefixCls}-header-nav`}>
        {renderNav()}
      </ul>
    </div>
  );
}
