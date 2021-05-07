import React, { useMemo, useState, useContext } from 'react';
import toReactElement from 'jsonml-to-react-element';
import { PageContext } from 'site/App';
import Preview from './Preview';
import CodeBox from './CodeBox';
import ToolBar from './ToolBar';
import './style.scss';

export default function Demo({ markdown }) {
  const { prefixCls, lang } = useContext(PageContext);
  const { meta, content, highlighted, previewPath } = markdown;
  const [showCode, setShowCode] = useState(false);

  const detail = useMemo(() => toReactElement(content[lang]), [content, lang]);

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className={`${prefixCls}-demo`}>
      <Preview filePath={previewPath} />
      <div className={`${prefixCls}-demo-desc`}>
        <h4>{meta.title[lang]}</h4>
        {detail}
      </div>
      <ToolBar prefixCls={prefixCls} toggleShowCode={toggleShowCode} />
      <CodeBox highlighted={highlighted} visible={showCode} />
    </div>
  );
}
