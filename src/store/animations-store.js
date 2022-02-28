import create from 'zustand'

export const useAnimationStore = create(() => ({
  generic: {
    initial: { opacity: 0, x: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', duration: 1 },
    },
    exit: { opacity: 0, transition: { type: 'spring', duration: 10 } },
  },
}))
