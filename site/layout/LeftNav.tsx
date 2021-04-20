import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type BasicProps from './types/BasicProps';
import { RouteItem } from 'site/config/router.config';
import classNames from 'classnames';

interface LeftNavProps extends BasicProps {
  routeList?: RouteItem[];
  hideMenu?: boolean;
}

export default function LeftNav({ prefixCls, routeList }: LeftNavProps) {


  const { pathname } = useLocation();
  const [selectedKey, setSelectedKey] = useState<string>();

  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname]);

  const getMenu = (routeList: LeftNavProps['routeList'], isSub = false) => {
    const menuList: ReactNode[] = [];

    routeList.map(route => {
      if (!route.name || route.hideInMenu) return;
      const path = route.path;

      const inner = (<>
        <div className={`${prefixCls}-menu-title`}>
          <span>{route.name}</span>
        </div>
        {!isSub && route.routes && !route.hideChildrenInMenu && getMenu(route.routes, true)}
      </>);

      const menuListItem = (
        <li
          className={classNames(`${prefixCls}${isSub ? '-sub' : ''}-menu-li`,
            {
              'selected': selectedKey === path,
            },
          )}
          key={path}
        >
          {isSub ? <Link to={path}>{inner}</Link> : inner}
        </li>
      );
      menuList.push(menuListItem);
    });

    return (
      <ul className={`${prefixCls}${isSub ? '-sub' : ''}-menu`}>
        {menuList}
      </ul>
    );
  };

  return (
    <div className={prefixCls}>
      {getMenu(routeList)}
    </div >
  );
}

LeftNav.defaultProps = {
  prefixCls: 'main-sider',
};
