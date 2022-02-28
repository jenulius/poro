import { useEffect, useState } from 'react'
import useSessionStore from '../store/session-store'
import TimerWorker from '../lib/timer-worker.js?sharedworker'
import { decideNextPhase } from './decideNextPhase'

const timershared = new TimerWorker()
timershared.onmessage = (e) => {}
const timer = timershared.port

const broadcast = new BroadcastChannel('poro')

export default function useSession() {
  const session = useSessionStore()

  useEffect(() => {
    broadcast.onmessage = ({ data }) => {
      // if tomer sends a delta update, update current time. else process next phase
      data.type === 'timer-delta' && session.setCurrent(data.payload)
      data.type === 'timer-state' && decideNextPhase(data.payload)
    }
  }, [])

  function start(dur) {
    session.setCurrent(session.pomoDuration)
    timer.postMessage(['start', session.pomoDuration])
    session.setPhase('POMO')
  }

  function pause() {
    timer.postMessage(['pause'])
    session.setIsPaused(true)
  }

  function resume() {
    timer.postMessage(['resume', session.current])
    session.setIsPaused(false)
  }

  function end() {
    console.log('ending')
    timer.postMessage(['end'])
  }

  return { start, pause, resume, end }
}
