import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'layout';

export default function Preview({ filePath }) {
  const [demo, setDemo] = useState<any>(null);

  useEffect(() => {
    const demoFn = require(`_data/${filePath.join('/')}`);
    // console.log(demoFn, 8989)
    setDemo(demoFn());
  }, []);

  return (

    <div className="main-demo-preview" >
      <ErrorBoundary>
        {demo}
      </ErrorBoundary>
    </div>
  );
}
