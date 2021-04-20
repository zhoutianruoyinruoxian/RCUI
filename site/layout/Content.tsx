import React from 'react';
import type { BasicProps } from './types';


export default function Content({ prefixCls, children }: BasicProps) {
  return (
    <div className={prefixCls}>
      {children}
    </div>
  );
}

Content.defaultProps = {
  prefixCls: 'main-layout-content',
};
