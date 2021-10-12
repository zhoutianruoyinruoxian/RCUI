import React from 'react';

export default interface BasicProps<T = HTMLDivElement> extends React.HTMLAttributes<T> {
  prefixCls?: string;
}
