import React, { useEffect, useState } from 'react';

export default function Preview({ filePath }) {
  const [demo, setDemo] = useState<any>();

  useEffect(() => {
    const demoFn = require(`compile/_data/${filePath.join('/')}`);
    // console.log(demoFn, 8989)
    setDemo(demoFn())
  }, [])
  return (

    <div className="main-demo-preview" >
      {demo}
    </div>
  )
}