import React, { useMemo, useState } from 'react';
import toReactElement from 'jsonml-to-react-element';
import code from 'public/code.svg';
import Preview from './Preview';
import CodeBox from './CodeBox';
import './style.scss';

export default function Demo({ markdown }) {
  const { meta, content, highlighted, previewPath } = markdown;
  const [showCode, setShowCode] = useState(false);

  const detail = useMemo(() => {
    const con = [...content['zh-CN']];
    con.splice(1, 0, { className: 'markdown' });
    return toReactElement(con);
  }, [content]);

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  const copyCode = () => {

  };

  return (
    <div className="main-demo">
      <h4 className="main-demo-title">{meta.title['zh-CN']}</h4>
      {detail}
      <Preview filePath={previewPath} />
      <div className="main-demo-toolbar">
        <div className="main-demo-toolbar-btn" onClick={toggleShowCode} >
          <img className="main-demo-toolbar-btn-icon" src={code} alt="" />
        </div>
        {/* <a className="main-demo-toolbar-btn" onClick={copyCode} >
          复制代码
        </a> */}
      </div>
      <CodeBox highlighted={highlighted} visible={showCode} />
    </div>
  );
}
