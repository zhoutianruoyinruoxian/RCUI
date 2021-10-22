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
  loadData: (selectedOption: Option) => {};
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

  useUpdateEffect(() => {
    setSelected(propsValue);
    setRenderList(getRenderList(propsValue));
  }, [propsValue]);

  useEffect(() => {
    setRenderList(getRenderList(selected));
  }, [options]);


  const handleSelect = (val: ValueItem, opt: Option, i: number) => {
    if (val === ALL) {
      selectAll(i);
    } else {
      selectItem(val, opt, i);
    }
  };

  const selectItem = async (val: ValueItem, opt: Option, i: number) => {
    const newSelected = [...selected];
    newSelected.splice(i, newSelected.length - i, val);
    if (!Reflect.has(props, 'value')) {
      setSelected(newSelected);
    }
    if (loadData && !(opt.children?.length > 0)) {
      // 异步数据
      await loadData(opt); //此处的异步没有用
      onChange?.(newSelected, false);
    } else {
      const newRenderList = getRenderList(newSelected);
      setRenderList(newRenderList);
      onChange?.(newSelected, newRenderList.length < newSelected.length);
    }
  };

  const selectAll = (i: number) => {
    const newSelected = [...selected];
    newSelected.splice(i);
    const newRenderList = getRenderList([...newSelected, ALL]);
    setSelected(newSelected);
    setRenderList(newRenderList);
    onChange?.(newSelected, false);
  };

  const getRenderList = (selected: Value) => [options].concat(getList(selected, options));
  console.log(renderList, 111)

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
    </div>
  );
}

Cascade.defaultProps = {
  prefixCls: 'rcui-cascade',
  category: [],
};
