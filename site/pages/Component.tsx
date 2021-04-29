import React from 'react';
import CodeBox from './CodeBox';
import toReactElement from 'jsonml-to-react-element';
import './index.scss';

export default function ComponentPage({ article, demos }: any) {
  article.content.splice(1, 1, { className: 'markdown' })
  const detail = toReactElement(article.content);
  return (
    <div className="markdown-container">
      <section className="main-demo-section">
        {
          demos.sort((a, b) => a.md.meta.order - b.md.meta.order).map((demo, i) => (
            <CodeBox
              key={i}
              filePath={demo.filePath}
              markdown={demo.md.content[demo.md.content.length - 1][1]}
              meta={demo.md.meta}
            />
          ))
        }
      </section>
      <div>
        {detail}
      </div>
    </div>
  );
}
