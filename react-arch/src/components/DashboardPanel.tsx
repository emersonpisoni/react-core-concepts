import type { ProfilerLog } from "../hooks/useProfilerData";

export function DashboardPanel({ logs }: { logs: ProfilerLog[] }) {
  return (
    <div className="dashboard">
      <h3>React Profiler Logs</h3>
      {logs.map((log, i) => {
        if (!log.id || !log.phase) return null;

        return (
          <div key={i}>
            <strong>{log.id}</strong> [{log.phase}] — {log.actualDuration}ms
          </div>
        )
      })}
    </div>
  );
}
