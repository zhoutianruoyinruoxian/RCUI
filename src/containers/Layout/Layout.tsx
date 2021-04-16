import React from 'react';
import classNames from 'classnames';
import type { BasicProps } from '../types';
import './style.scss';

interface LayoutProps extends BasicProps {
  mode?: 'col' | 'row';
}

export default function Layout({ prefixCls, mode = 'col', children }: LayoutProps) {
  return (
    <div
      className={
        classNames(prefixCls, {
          [`${prefixCls}-row`]: mode === 'row',
        })}
    >
      {children}
    </div>
  );
}

function Content({ prefixCls, children }: BasicProps) {
  return (
    <div className={prefixCls}>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  prefixCls: 'main-layout',
};

Content.defaultProps = {
  prefixCls: 'main-layout-content',
};

Layout.Content = Content;
