import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import type BasicProps from '../types/BasicProps';
import { ComponentRouteItem } from 'site/config/router.config';
import './style.scss';

interface LeftNavProps extends BasicProps {
  navlist?: ComponentRouteItem[];
  hideMenu?: boolean;
}

export default function LeftNav({ prefixCls, navlist }: LeftNavProps) {

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

  const renderSubMenu = (list) => (
    <ul className={`${prefixCls}-sub-menu`}>
      {list.map(({ name, path }) => (
        <li
          className={`${prefixCls}-sub-menu-li`}
          key={path}
        >
          <NavLink to={path}>
            <div className={`${prefixCls}-sub-menu-title`}>
              {name}
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={prefixCls}>
      <ul className={`${prefixCls}-menu`}>
        {Object.keys(menu).sort((a, b) => menu[a].order - menu[b].order).map(type => (
          <li
            className={`${prefixCls}-menu-li`}
            key={type}
          >
            <div className={`${prefixCls}-menu-title`}>
              {type}
            </div>
            {renderSubMenu(menu[type])}
          </li>
        ))}
      </ul>
    </div >
  );
}

LeftNav.defaultProps = {
  prefixCls: 'main-sider',
};
