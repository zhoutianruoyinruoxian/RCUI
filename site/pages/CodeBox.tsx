import React from 'react';

export default function ({ markdown, filePath }) {
  console.log(markdown,filePath,8888)
  const path = filePath
  .replace(/.*\/components\//, '../../compile/_data/')
  .replace('demo/','')
  .replace('.md','.js');
  console.log(require('../../compile/_data/AsyncButton/advance.js'),777)
  const demo = import('../../compile/_data/AsyncButton/advance.js').then(res=>{

    console.log(res, 999)
  });
  return (
    <div className="main-code-box markdown">
      <h3>示例：</h3>

      <div className="demo markdown" >
        {/* {eval(`(${markdown.realCode})()`)} */}
      </div>
      <div className="code markdown"
        dangerouslySetInnerHTML={{
          __html: markdown.highlighted,
        }}
      />
    </div>
  );
}
