import { CSSProperties, ReactChild } from 'react';

export default interface BasicProps {
  prefixCls?: string;
  style?: CSSProperties;
  className?: string;
  children?: ReactChild;
}
