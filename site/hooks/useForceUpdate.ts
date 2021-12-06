import { useState } from 'react';

export default function useForceUpdate() {
  const [state, setState] = useState(false);

  // 这种return写法貌似会有state更新不了的bug
  return () => setState(!state);
}
