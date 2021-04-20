import React from 'react';
import classNames from 'classnames';
import type { BasicProps } from './types';

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

Layout.defaultProps = {
  prefixCls: 'main-layout',
};
