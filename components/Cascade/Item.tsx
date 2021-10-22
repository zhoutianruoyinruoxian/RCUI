import React, { useState } from 'react';
import type { ReactNode } from 'react';
import classNames from 'classnames';
import { useUpdateEffect } from '../hooks';
import { BasicProps } from '../types';
import './style.scss';

export type Value = string | number;

export interface Option {
  value?: Value;
  label?: ReactNode;
  disabled?: boolean;
  isLeaf?: boolean;
  loading?: boolean;
  children?: Array<Option>;
  [key: string]: any;
}

interface ItemProps extends BasicProps {
  defaultValue?: Value;
  value?: Value;
  list?: Option[];
  showAll?: boolean;
  onChange?: (value: Value) => void;
}

export const ALL = Symbol('all') as any;

export default function Item(props: ItemProps) {
  const {
    prefixCls,
    list,
    showAll,
    value: propsValue,
    defaultValue,
    onChange,
  } = props;

  const [selected, setSelected] = useState<Value>(propsValue || defaultValue || ALL);

  useUpdateEffect(() => {
    setSelected(propsValue);
  }, [propsValue]);

  const handleClick = ({ value, disabled }: Option) => {
    if (disabled || value === selected) return;
    if (!Reflect.has(props, 'value')) {
      setSelected(value);
    }
    onChange?.(value);
  };

  return (
    <div className={`${prefixCls}-item`}>
      {showAll &&
        <span
          className={classNames(`${prefixCls}-item-tag`, {
            active: selected === ALL,
          })}
          onClick={() => handleClick({ value: ALL })}
        >全部</span>
      }
      {list?.map(item => {
        const { value, label, disabled } = item;
        return (
          <span
            key={value}
            className={classNames(`${prefixCls}-item-tag`, {
              disabled,
              active: selected === value,
            })}
            onClick={() => handleClick(item)}
          >{label || value}</span>
        );
      })}
    </div>
  );
}
