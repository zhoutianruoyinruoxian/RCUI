import React from 'react';
import classNames from 'classnames';
import type { BasicProps } from '../types';
import './style.scss';

export type Span = 12 | 24;
export interface ColProps extends BasicProps {
  span?: Span;
  rowStyle?: BasicProps['style'];
}

export default function Col({ prefixCls, className, span, rowStyle, style, ...others }: ColProps) {
  return (
    <div
      className={classNames(
        `${prefixCls}-col`,
        `${prefixCls}-col-${span}`,
        className
      )}
      style={{
        ...rowStyle,
        ...style,
      }}
      {...others}
    />
  )
}

Col.defaultProps = {
  prefixCls: 'main',
  span: 24,
}