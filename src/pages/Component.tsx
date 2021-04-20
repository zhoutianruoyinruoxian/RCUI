import React from 'react';
import md from '@/StepGuide/index.zh-CN.md';
// console.log(md, 888)

export default function ComponentPage() {
  return (
    <div
      className="markdown-container"
      dangerouslySetInnerHTML={{
        __html: md,
      }}
    />
  );
}
