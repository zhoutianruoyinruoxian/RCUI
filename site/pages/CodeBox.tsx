import React, { useEffect, useState } from 'react';

export default function ({ markdown, filePath, meta }) {
  const [demo, setDemo] = useState<any>();
  console.log(meta, 8888)
  const path = filePath
    .replace(/.*\/components\//, '')
    .replace('demo/', '')
    .replace('.md', '.js');

  useEffect(() => {
    const demoFn = require(`../../compile/_data/${path}`);
    console.log(demoFn, 8989)
    setDemo(demoFn())
  }, [])

  return (
    <div className="main-code-box markdown">
      <h3>{meta.title['zh-CN']}</h3>
      {demo}
      <div className="demo markdown" >
        {/* {eval(`(${markdown.realCode})()`)} */}
      </div>
      <div className="code markdown">
        <pre className="language-jsx">
          <code
            dangerouslySetInnerHTML={{
              __html: markdown.highlighted,
            }}
          />
        </pre>
      </div>
    </div>
  );
}
