import React from 'react';
import {
  AppstoreOutlined,
} from '@ant-design/icons';

export interface RouteItem {
  path: string;
  name?: string;
  icon?: React.ReactNode;
  redirect?: string;
  component?: string;
  routes?: Array<RouteItem>;
  hideInMenu?: boolean;
  hideChildrenInMenu?: boolean;
}

const menuList: Array<RouteItem> = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Component/StepGuide',
    name: 'StepGuide 步骤引导',
    icon: <AppstoreOutlined />,
    component: 'Component',
  },
];

export default menuList;
