import React, { useMemo, useState, useContext } from 'react';
import toReactElement from 'jsonml-to-react-element';
import { PageContext } from 'site/App';
import code from 'public/code.svg';
import Preview from './Preview';
import CodeBox from './CodeBox';
import './style.scss';

export default function Demo({ markdown }) {
  const { prefixCls, lang } = useContext(PageContext);
  const { meta, content, highlighted, previewPath } = markdown;
  const [showCode, setShowCode] = useState(false);

  const detail = useMemo(() => toReactElement(content[lang]), [content, lang]);

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  const copyCode = () => {

  };

  return (
    <div className={`${prefixCls}-demo`}>
      <Preview filePath={previewPath} />
      <div className={`${prefixCls}-demo-desc`}>
        <h4>{meta.title[lang]}</h4>
        {detail}
      </div>
      <div className={`${prefixCls}-demo-toolbar`}>
        <div className={`${prefixCls}-demo-toolbar-btn`} onClick={toggleShowCode} >
          <img className={`${prefixCls}-demo-toolbar-btn-icon`} src={code} alt="" />
        </div>
        {/* <a className="main-demo-toolbar-btn" onClick={copyCode} >
          复制代码
        </a> */}
      </div>
      <CodeBox highlighted={highlighted} visible={showCode} />
    </div>
  );
}
