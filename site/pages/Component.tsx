import React from 'react';
import CodeBox from './CodeBox';
import toReactElement from 'jsonml-to-react-element';

export default function ComponentPage({ article, demos }: any) {
  article.content.splice(1, 1, { className: 'markdown' })
  const detail = toReactElement(article.content);
  return (
    <div className="markdown-container">
      {
        demos.map((demo, i) => (
          <CodeBox
            key={i}
            filePath={demo.filePath}
            markdown={demo.md.content[demo.md.content.length - 1][1]} />
        ))
      }
      <div>
        {detail}
      </div>
    </div>
  );
}
