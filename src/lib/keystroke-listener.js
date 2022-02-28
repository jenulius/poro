import { emitCustomEvent } from 'react-custom-events'

export default function activateKeystrokeListener() {
  let Meta = null

  // ckeck if keystrokes mach a pattern and trigger
  // respective custom events.

  document.addEventListener('keydown', (e) => {
    e.key === 'Meta' && (Meta = true)
  })

  document.addEventListener('keyup', (e) => {
    e.key === 'Meta' && (Meta = null)
  })

  document.addEventListener('keydown', (e) => {
    e.key == '/' && Meta && emitCustomEvent('quickadd')
  })
}
