import React, { useEffect, useState } from 'react';

export default function Preview({ filePath }) {
  const [demo, setDemo] = useState<any>();
  // console.log(meta, 8888)
  const path = filePath
    .replace(/.*\/components\//, '')
    .replace('demo/', '')
    .replace('.md', '.js');

  useEffect(() => {
    const demoFn = require(`../../../../compile/_data/${path}`);
    // console.log(demoFn, 8989)
    setDemo(demoFn())
  }, [])
  return (

    <div className="main-demo-preview" >
      {demo}
    </div>
  )
}