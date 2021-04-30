import React, { useEffect } from 'react';
import classNames from 'classnames';
import type { BasicProps } from '../types';
import './style.scss';

type Child = React.ReactElement<any, string | React.JSXElementConstructor<any>>;
interface RowProps extends BasicProps {
  gutter?: number;
  children?: Child | Child[];
}

export default function Row({ prefixCls, className, style, gutter, children, ...others }: RowProps) {

  const rowStyles = gutter ? {
    ...style,
    marginLeft: `-${gutter}px`,
    marginRight: `-${gutter}px`,
  } : style;

  const colChild = React.Children.map(children, child => {
    return React.cloneElement(child, {
      rowStyle: gutter ? {
        paddingLeft: `${gutter}px`,
        paddingRight: `${gutter}px`,
      } : {}
    })
  });

  return (
    <div
      className={classNames(
        `${prefixCls}-row`,
        `${prefixCls}-row-${gutter}`,
        className,
      )}
      style={rowStyles}
      {...others}
    >
      {colChild}
    </div>
  )
}

Row.defaultProps = {
  gutter: 0,
  prefixCls: 'main',
}
