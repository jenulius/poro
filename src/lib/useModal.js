import create from 'zustand'

export const useModal = create((set) => ({
  Element: null,
  show: false,
  data: null,
  callback: null,
  modal: (Element, data, callback) => {
    Element !== null
      ? set((state) => {
          state.Element = Element
          state.show = !state.show
          state.callback = callback
          state.data = data
        })
      : console.error('useModal: Please provide an element!')
  },
}))
