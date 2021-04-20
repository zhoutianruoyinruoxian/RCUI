import React from 'react';

export default function ComponentPage({ markdown }: any) {
  console.log(markdown.demo.content, 888)
  const Demo = markdown.Demo;
  return (
    <div className="markdown-container markdown ">
      <div className="demo">
        <h3>示例：</h3>
        <Demo />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: markdown.document.content,
        }}
      />
    </div>
  );
}
