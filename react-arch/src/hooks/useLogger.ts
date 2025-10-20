import { useEffect, useRef } from "react";

export function useLogger(name: string, props: unknown) {
  const renders = useRef(0);

  useEffect(() => {
    renders.current++;
    console.log(`[${name}] render #${renders.current}`, props);
  });
}
