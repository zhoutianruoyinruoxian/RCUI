import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import './style/theme.less';
import './style/all.css';
import zhCN from 'antd/es/locale/zh_CN';
import Router from './routes';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './style/index.scss';
import getComponentRouteList from './config/router.config';

moment.locale('zh-cn'); // 设置moment全局语言

const renderApp = async () => {
  const routeList = await getComponentRouteList();
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <Router routeList={routeList} />
    </ConfigProvider>
    , document.getElementById('root'),
  );
};
renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
