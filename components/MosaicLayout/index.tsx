import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { BasicDomProps } from '../types';
import './style.scss';

interface MosaicLayoutProps extends BasicDomProps {
  splitWidth?: number;
  minWidth?: number;
}

const getPosition = (list: Element[]): [number[], number] => {
  let widthList = list.map(dom => dom.getBoundingClientRect().width);
  const height = Math.max(...list.map(dom => dom.getBoundingClientRect().height));
  const allWidth = widthList.reduce((all, o) => all + o, 0);
  widthList = widthList.map(o => o / allWidth * 100);
  const positionList = [];
  widthList.reduce((totalWidth: number, item: number, index: number) => {
    let left: number, right: number;
    if (index === 0) {
      left = 0;
    } else {
      left = (totalWidth + widthList[index - 1]);
    }
    if (index === list.length - 1) {
      right = 0;
    } else {
      right = (100 - left - item);
    }
    positionList.push({ left, right });
    return left;
  }, 0);
  return [positionList, height];
};

export default function MosaicLayout({
  prefixCls,
  children,
  className,
  style,
  splitWidth,
  minWidth,
  ...args
}: MosaicLayoutProps) {

  const contentRef = useRef<HTMLDivElement[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const moveKey = useRef(-1);

  const [height, setHeight] = useState(0);
  const [positionList, setPositionList] = useState([]);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const domList = contentRef.current;
    const [list, height] = getPosition(domList);
    setReady(true);
    setPositionList(list);
    setHeight(height);
  }, []);

  const onMouseDown = (e: any, index: number) => {
    // 鼠标右键点击也会触发onMouseDown，此处进行屏蔽，（e.nativeEvent.button === 2）表示右键
    if (e.nativeEvent.button === 2) return;
    moveKey.current = index;
    setActive(index);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
  };

  const onMouseUp = () => {
    setActive(-1);
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
  };

  const onMouseMove = (e: MouseEvent) => {
    const mouseleft = e.clientX;
    const wrapperLeft = wrapperRef.current.offsetLeft;
    const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
    const position = [...positionList];
    const index = moveKey.current;
    const min = position?.[index - 1]?.left + minWidth || minWidth;
    const max = position[index + 1] ? position[index + 1].left - minWidth : 100 - minWidth;
    const left = Math.min(Math.max((mouseleft - wrapperLeft) / wrapperWidth * 100, min), max);
    position[index - 1].right = 100 - left;
    position[index].left = left;
    setPositionList(position);
  };

  return (
    <div
      className={classNames(prefixCls, className)}
      style={{
        height,
        opacity: ready ? 1 : 0,
        ...style,
      }}
      ref={wrapperRef}
      {...args}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {index !== 0 &&
              <div
                className={classNames(`${prefixCls}-split`, {
                  active: active === index,
                })}
                onMouseDown={(e) => onMouseDown(e, index)}
                style={{
                  width: splitWidth,
                  marginLeft: -splitWidth / 2,
                  left: `${positionList?.[index]?.left}%`,
                }}
              />
            }
            <div
              className={`${prefixCls}-content`}
              ref={ref => contentRef.current[index] = ref}
              style={{
                left: `${positionList?.[index]?.left}%`,
                right: `${positionList?.[index]?.right}%`,
              }}
            >
              {child}
            </div>
          </>
        );
      })}
    </div>
  );
}

MosaicLayout.defaultProps = {
  prefixCls: 'rcui-mosaic-layout',
  splitWidth: 8,
  minWidth: 4, // 这里指的是（4%）
};
