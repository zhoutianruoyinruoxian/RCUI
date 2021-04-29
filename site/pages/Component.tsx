import React from 'react';
import CodeBox from './CodeBox';

export default function ComponentPage({ article, demo }: any) {
  console.log(article, demo, 888)
  return (
    <div className="markdown-container">
      22
      {/* <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: markdown.description,
        }}
      />
      {markdown.example.map((item, index) => (
        <CodeBox {...item} key={index} />
      ))}
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: markdown.content,
        }}
      /> */}
    </div>
  );
}
