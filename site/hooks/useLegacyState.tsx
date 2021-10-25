import { useReducer } from 'react';

export default function useLegacyState<T>(initialStore: T) {
  const [store, dispatch] = useReducer((state: T, action: T) => ({ ...state, ...action }), initialStore);
  return [store, dispatch];
}
