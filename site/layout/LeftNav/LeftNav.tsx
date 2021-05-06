import React, { useMemo } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type BasicProps from '../types/BasicProps';
import { RouteItem } from 'site/config/router.config';
import classNames from 'classnames';
import './style.scss';

interface LeftNavProps extends BasicProps {
  navlist?: RouteItem[];
  hideMenu?: boolean;
}

export default function LeftNav({ prefixCls, navlist }: LeftNavProps) {

  const { pathname } = useLocation();

  const menu = useMemo(() => {
    const obj = {};
    navlist.forEach(item => {
      const { type } = item;
      if (!obj[type]) {
        obj[type] = [];
      }
      obj[type].push(item);
    });
    return obj;
  }, [navlist]);

  const renderMenu = () => (
    <ul className={`${prefixCls}-menu`}>
      {Object.keys(menu).map(type => (
        <li
          className={`${prefixCls}-menu-li`}
          key={type}
        >
          <div className={`${prefixCls}-menu-title`}>
            <span>{type}</span>
          </div>
          {renderSubMenu(menu[type])}
        </li>
      ))}
    </ul>
  );

  const renderSubMenu = (list) => (
    <ul className={`${prefixCls}-sub-menu`}>
      {list.map(({ name, path }) => (
        <li
          className={classNames(`${prefixCls}-sub-menu-li`,
            {
              'selected': pathname === path,
            },
          )}
          key={path}
        >
          <Link to={path}>
            <div className={`${prefixCls}-menu-title`}>
              <span>{name}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={prefixCls}>
      {renderMenu()}
    </div >
  );
}

LeftNav.defaultProps = {
  prefixCls: 'main-sider',
};
