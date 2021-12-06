import { useState } from 'react';

export default function useForceUpdate() {
  const [, setState] = useState(false);
  return () => setState(o => !o);
}
