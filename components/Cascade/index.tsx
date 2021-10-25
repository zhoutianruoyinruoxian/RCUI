import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useUpdateEffect } from '../hooks';
import { BasicProps } from '../types';
import Item, { ALL } from './Item';
import type { Value as ValueItem, Option } from './Item';
import './style.scss';

type Value = ValueItem[];

interface CascadeProps extends BasicProps {
  showAll?: boolean;
  defaultValue?: Value;
  value?: Value;
  options: Option[];
  category?: ReactNode[];
  onChange?: (value: Value, isLeaf?: boolean) => void;
  loadData?: (selectedOption: Option) => void;
}

const getList = (selected: Value, list: Option[]) => {
  let arr = [];
  const id = selected[0];
  if (id && list?.length > 0) {
    const children = list.find(({ value }) => value === id)?.children;
    if (children?.length > 0) {
      arr.push(children);
      const newSelected = selected.slice(1);
      arr = arr.concat(getList(newSelected, children));
    }
  }
  return arr;
};

export default function Cascade(props: CascadeProps) {
  const {
    showAll,
    onChange,
    defaultValue,
    value: propsValue,
    options,
    loadData,
    category,
    prefixCls,
  } = props;

  const [selected, setSelected] = useState(propsValue || defaultValue || []);
  const [renderList, setRenderList] = useState<Option[][]>([]);

  useEffect(() => {
    setRenderList(getRenderList(selected));
  }, [options]);

  useUpdateEffect(() => {
    setSelected(propsValue);
    setRenderList(getRenderList(propsValue));
  }, [propsValue]);

  const handleSelect = (val: ValueItem, opt: Option, i: number) => {
    if (val === ALL) {
      selectAll(i);
    } else {
      selectItem(val, opt, i);
    }
  };

  const selectItem = (val: ValueItem, opt: Option, i: number) => {
    const newSelected = [...selected];
    newSelected.splice(i, newSelected.length - i, val);
    if (!Reflect.has(props, 'value')) {
      setSelected(newSelected);
    }
    const newRenderList = getRenderList(newSelected);
    setRenderList(newRenderList);
    let isLeaf = newRenderList.length <= newSelected.length;
    // 如果loadData存在而且当前节点的children不存在，则需要走异步获取数据
    if (loadData && !(opt.children?.length > 0)) {
      // 此处调用loadData就是一个生命周期的钩子，表示该节点需要通过异步获取数据了，
      // 最终获取到的数据是通过更新props.options来重新渲染组件。
      loadData(opt);
      isLeaf = false;
    }
    onChange?.(newSelected, isLeaf);
  };

  const selectAll = (i: number) => {
    const newSelected = [...selected];
    newSelected.splice(i);
    const newRenderList = getRenderList([...newSelected, ALL]);
    if (!Reflect.has(props, 'value')) {
      setSelected(newSelected);
    }
    setRenderList(newRenderList);
    onChange?.(newSelected, false);
  };

  const getRenderList = (selected: Value) => [options].concat(getList(selected, options));

  return (
    <div className={prefixCls}>
      {renderList.map((list, i) => (
        <div className={`${prefixCls}-row`} key={i}>
          {category?.length > 0 && <span className={`${prefixCls}-row-label`}>{category[i]}: </span>}
          <Item
            showAll={showAll}
            prefixCls={prefixCls}
            list={list}
            value={selected[i]}
            onChange={(val, opt) => handleSelect(val, opt, i)}
          />
        </div>
      ))}
      {loadData && renderList[renderList.length - 1]?.findIndex(({ loading }) => loading) > -1 &&
        <div className={`${prefixCls}-row`} >
          {category[renderList.length] && <span className={`${prefixCls}-row-label`}>{category[renderList.length]}: </span>}
          <div className={`${prefixCls}-loading`} />
        </div>
      }
    </div>
  );
}

Cascade.defaultProps = {
  prefixCls: 'rcui-cascade',
  category: [],
};
