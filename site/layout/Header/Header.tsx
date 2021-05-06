import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { PageContext } from 'site/App';
import type { BasicProps } from '../types';
import './style.scss';

interface HeaderProps extends BasicProps {
}

export default function Header() {
  const { menuList, prefixCls } = useContext(PageContext);
  const { pathname } = useLocation();

  const renderNav = () => menuList.map(({ name, path }) => (
    <li
      key={path}
      className={classNames(`${prefixCls}-header-nav-list`, {
        active: pathname.includes(path),
      })}
    >
      <Link to={path} >{name}</Link>
    </li>
  ));

  return (
    <div className={`${prefixCls}-header`}>
      <a className={`${prefixCls}-header-logo`} >
        {/* <img src={logo} width="140" height="48" /> */}
        <span>RCUI</span>
      </a>
      <div className={`${prefixCls}-header-left`}>
        {/* <Input.Search placeholder="搜索暂不可用" /> */}
      </div>
      <ul className={`${prefixCls}-header-nav`}>
        {renderNav()}
      </ul>
    </div>
  );
}
