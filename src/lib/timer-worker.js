console.log('TimerWorker: loaded sucessfully.')

// broadcast
const broadcast = new BroadcastChannel('poro')
const postTimerUpdate = (secs) => {
  broadcast.postMessage({ type: 'timer-delta', payload: secs })
}
const postStateUpdate = (state) => {
  broadcast.postMessage({ type: 'timer-state', payload: state })
}

class Timer {
  constructor() {
    this.paused = false
    this.step = () => {}
  }

  start(e) {
    clearInterval(this.interval)
    this.secs = e
    console.log(this.secs)
    this.interval = setInterval(() => {
      if (!this.paused && this.secs !== 0) {
        this.secs--
        postTimerUpdate(this.secs)
      } else if (!this.paused && this.secs === 0) {
        clearInterval(this.interval)
        postStateUpdate('stopped')
      }
    }, 1000)
  }

  pause() {
    this.paused = true
  }

  resume(c) {
    this.paused = false
    this.start(c)
  }
}

// did not destructure because 'this' is lost.
const T = new Timer()

// identify & execute command from message

onconnect = function (e) {
  const port = e.ports[0]
  console.log('PORT', port)

  port.onmessage = function (msg) {
    const [command, data] = [...msg.data]
    command === 'start' && T.start(data)
    command === 'pause' && T.pause()
    command === 'resume' && T.resume(data)
  }
}
