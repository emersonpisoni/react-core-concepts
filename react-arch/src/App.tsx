// import { Profiler } from 'react'
// import { DashboardPanel } from './components/DashboardPanel'
// import { useProfilerData } from './hooks/useProfilerData'
import { Counter } from './components/Counter'

import './App.css'

function App() {
  // const { onRender, logs } = useProfilerData()

  return (
    <div style={{ display: "flex" }}>
      {/* <Profiler id="Counter" onRender={onRender} />
      <DashboardPanel logs={logs} /> */}
      <Counter />
    </div>

  )
}

export default App
