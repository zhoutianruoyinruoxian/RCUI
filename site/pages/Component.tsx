import React from 'react';

export default function ComponentPage({ markdown }: any) {
  return (
    <div
      className="markdown-container"
      dangerouslySetInnerHTML={{
        __html: markdown,
      }}
    />
  );
}
