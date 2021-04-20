import React from 'react';
import * as componentList from 'rcui';


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
    path: '/Component',
    name: '数据展示',
    routes: [
      {
        path: '/Component/StepGuide',
        name: 'StepGuide 步骤引导',
        component: 'Component',
      },
    ],
  },
];

export default menuList;


function transformer(all) {
  const componentList = Object.keys(all);
  console.log(componentList, 22)
}
const routeList = transformer(componentList);
console.log(routeList, 123)
