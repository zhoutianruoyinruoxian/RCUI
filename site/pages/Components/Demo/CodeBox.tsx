import React from 'react';
import classNames from 'classnames';

interface CodeBoxProps {
  highlighted: {
    lang: string;
    code: string;
  };
  visible: boolean;
}

export default function CodeBox({ highlighted, visible }: CodeBoxProps) {
  return (
    <div
      className={classNames('main-code-box', 'markdown', {
        active: visible,
      })}
    >
      <pre className={`language-${highlighted.lang}`}>
        <code
          dangerouslySetInnerHTML={{
            __html: highlighted.code,
          }}
        />
      </pre>
    </ div>
  );
}
