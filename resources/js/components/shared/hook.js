import { useSyncExternalStore } from "react";

export function useWindowHeight() {
  return useSyncExternalStore(cb => {
    window.addEventListener('resize', cb);
    return () => {
      window.removeEventListener('resize', cb);
    };
  }, () => window.innerHeight)
}