import React from 'react';

export default function ComponentPage({ markdown }: any) {
  console.log(markdown.demo.content, 888)
  const Demo = markdown.Demo;
  return (
    <div className="markdown-container">
      <div className="demon markdown">
        <h3>示例：</h3>
        <Demo />
      </div>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: markdown.document.content,
        }}
      />
    </div>
  );
}
