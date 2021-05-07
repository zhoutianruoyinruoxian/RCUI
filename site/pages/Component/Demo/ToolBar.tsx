import React from 'react';
import code from 'public/code.svg';

export default function ToolBar({ prefixCls, toggleShowCode }) {

  const copyCode = () => {

  };

  return (
    <div className={`${prefixCls}-demo-toolbar`}>
      <div className={`${prefixCls}-demo-toolbar-btn`} onClick={toggleShowCode} >
        <img className={`${prefixCls}-demo-toolbar-btn-icon`} src={code} alt="" />
      </div>
      {/* <a className="main-demo-toolbar-btn" onClick={copyCode} >
          复制代码
        </a> */}
    </div>
  );
}
