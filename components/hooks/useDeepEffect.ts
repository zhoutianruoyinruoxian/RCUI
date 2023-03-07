import { useEffect, useRef } from 'react';
import type { EffectCallback } from 'react';
import { isEqual } from 'lodash';


export default function useDeepEffect(effect: EffectCallback, dependencies: any[]) {
  const oldDependencies = useRef(null);
  return useEffect(() => {
    if (isEqual(oldDependencies.current, dependencies)) return;
    oldDependencies.current = dependencies;
    return effect();
  }, dependencies);
}
