// the session store should only handle states that are necessary
// for the execution of a session sequence (pomo, break, pomo, ...)

import create from 'zustand'
import { configurePersist } from 'zustand-persist'
import { msConversion } from '../lib/general'
import { share } from 'shared-zustand'

const { persist, purge } = configurePersist({
  storage: localStorage,
  rootKey: 'poro',
})

const useSessionStore = create(
  persist(
    {
      key: 'session',
    },
    (set, get) => ({
      // states
      current: 5,
      phase: 'INITIAL',
      pomosCompleted: 0,
      isPaused: localStorage.getItem('poro') ? true : false,

      // parameters
      pomoTarget: 2,
      pomoDuration: 5,
      breakDuration: 3,

      // set/update methods
      setPhase: (p) => set({ phase: p }),
      setPomoTarget: (newTarget) => set({ pomoTarget: newTarget }),
      setPomoDuration: (newDuration) =>
        set({ current: newDuration, pomoDuration: newDuration }),
      setBreakDuration: (newBreakDuration) =>
        set({ breakDuration: newBreakDuration }),
      setIsPaused: (bool) => set({ isPaused: bool }),
      setCurrent: (t) => set({ current: t }),

      // get methods
      timeRemaining: () =>
        get().current !== null && msConversion(get().current * 1000),
    })
  )
)

// use shared-zustand to sync across windows. just temporary.
share('isPaused', useSessionStore)
share('phase', useSessionStore)
share('pomoTarget', useSessionStore)
share('pomoDuration', useSessionStore)
share('breakDuration', useSessionStore)
share('pomosCompleted', useSessionStore)
share('current', useSessionStore)

export default useSessionStore
