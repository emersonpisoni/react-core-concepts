import { useState, useCallback } from "react";

export type ProfilerLog = {
  id: string;
  phase: string;
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
};

export function useProfilerData() {
  const [logs, setLogs] = useState<ProfilerLog[]>([]);

  const onRender = useCallback(
    (id: string, phase: string, actualDuration: number, baseDuration: number, startTime: number, commitTime: number) => {
      setLogs(prev => [
        {
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime,
        },
        ...prev,
      ]);
    },
    []
  );

  return { logs, onRender };
}
