import store from '../store/session-store'
import TimerWorker from '../lib/timer-worker.js?sharedworker'

const timershared = new TimerWorker()
timershared.onmessage = (e) => {}
const timer = timershared.port

export function decideNextPhase() {
  const { pomoDuration, breakDuration, phase, pomosCompleted } =
    store.getState()

  console.log(phase)
  if (phase === 'POMO') {
    store.setState({
      current: breakDuration,
      phase: 'BREAK',
      pomosCompleted: pomosCompleted + 1,
    })
    timer.postMessage(['start', breakDuration])
  }

  if (phase === 'BREAK') {
    console.log('starting pomo')
    timer.postMessage(['start', pomoDuration])
    store.setState({ current: pomoDuration, phase: 'POMO' })
  }

  phase === 'BREAK' && store.setState({ phase: 'POMO' })
}
