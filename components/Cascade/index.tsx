import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { BasicProps } from '../types';
import Item, { ALL } from './Item';
import type { Value as ValueItem, Option } from './Item';
import './style.scss';


type Value = ValueItem[];

interface CascadeProps extends BasicProps {
  showAll?: boolean;
  defaultValue?: Value;
  value?: Value;
  onChange?: (selected: Value, isLeaf?: boolean) => void;
  options: Option[];
  loadData: () => {};
  category?: ReactNode[];
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
  }, [propsValue, options]);

  const handleSelect = (val: ValueItem, i: number) => {
    if (val === ALL) {
      selectAll(i);
    } else {
      selectItem(val, i);
    }
  };

  const selectItem = (val: ValueItem, i: number) => {
    const newSelected = [...selected];
    newSelected.splice(i, newSelected.length - i, val);
    const newRenderList = getRenderList(newSelected);
    setSelected(newSelected);
    setRenderList(newRenderList);
    if (newRenderList.length > newSelected.length) {
      //级联还没选择完毕
      //loaddata的逻辑
      onChange?.(newSelected, false);
    } else {
      //级联已经选中最终节点
      onChange?.(newSelected, true);
    }
  };

  const selectAll = (i:number) => {
    const newSelected = [...selected];
    newSelected.splice(i);
    const newRenderList = getRenderList([...newSelected, ALL]);
    setSelected(newSelected);
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
            onChange={val => handleSelect(val, i)}
          />
        </div>
      ))}
    </div>
  );
}

Cascade.defaultProps = {
  prefixCls: 'rcui-cascade',
  category: [],
};
