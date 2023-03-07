import React, { useMemo } from 'react';
import './index.less';

interface HighlightProps {
  content: string;
  keyword: string;
}

export default function Highlight({ content, keyword }: HighlightProps) {

  const value = useMemo(() => {
    let highlightContent = content?.replace(keyword, v => {
      const { length } = v;
      const split = Math.ceil(length / 2);
      return `<strong>${v.slice(0, split)}</strong></p><p><strong>${v.slice(split)}</strong>`;
    });
    highlightContent = `<p>${highlightContent}</p>`;
    return highlightContent;
  }, [content, keyword]);

  return (
    <p
      title={content}
      dangerouslySetInnerHTML={{ __html: value }}
      className="high-light"
    />
  );
}
