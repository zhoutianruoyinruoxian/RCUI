import React, { useState, useEffect } from 'react';

function getSize({src,name}) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onerror = (err) => {
      reject(err);
    };
    if (img.complete) {
      resolve(img);
    }
    const id = setInterval(() => {
      if (img.width > 0 || img.height > 0) {
        clearInterval(id);
        resolve(img);
      }
    }, 50);
  });
}

export default function Waterfall({ dataSource, colSpan, incremental,sortFn }: any) {

  const [heights, setHeights] = useState<number[]>(new Array(colSpan).fill(0));
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    Promise.all(dataSource.map((data) => getSize(data))).then(imgList => {
      generatorCol(dataSource, imgList);
    });

  }, [dataSource]);


  const generatorCol = (dataSource, imglist) => {
    const newHeight = incremental ? [...heights] : new Array(colSpan).fill(0);
    const newDatas = incremental ? [...datas] : [];
    imglist.forEach(({ height }, i) => {
      const minHeightIndex = newHeight.indexOf(Math.min(...heights));
      newHeight[minHeightIndex] += height;
      newDatas[minHeightIndex].push(dataSource[i]);
    });
    setHeights(newHeight);
    setDatas(newDatas);
  };

  const getList = (list) => {
    return (
      <ul>
        {list.map(({ id, name, img }) => (
          <li key={id}>
            <img src={img} alt="" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {datas.map(data => getList(data))}
    </div>
  );
}

Waterfall.defaultProps = {
  colSpan: 2,
  incremental: true,
};
