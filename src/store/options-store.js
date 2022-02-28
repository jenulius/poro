import create from 'zustand'

const useOptions = create((set, get) => ({
  // session options
  pomoDurationPresets: [{label: '35 mins', }],
  breakDurationPresets: [],
  pomoTargetPresets: [],
}))

export default useOptions
// the default is presets[0]
