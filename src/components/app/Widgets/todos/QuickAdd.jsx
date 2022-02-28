import { useState } from 'react'
import useStyles from '../../../../styles/app-styles'
import ModalWrapper from '../../../common/ModalWrapper'
import { useCustomEventListener } from 'react-custom-events'

export default function QuickAdd({ initial }) {
  const styles = useStyles().quickAdd

  const [show, setShow] = useState(initial)

  // the input value is tracked via onChange
  const [inputValue, setInputValue] = useState('')

  useCustomEventListener('quickadd', () => {
    setShow(!show)
  })

  // execute commands when user presses enter
  function executeQuickAdd() {
    console.log('new todo from QA:', inputValue)
    setShow(false)
  }

  return show ? (
    <ModalWrapper onModalClick={(e) => setShow(false)}>
      <div
        className={styles}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <input
          type='text'
          autoFocus
          defaultValue={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={(e) => {
            e.key === 'Enter' && executeQuickAdd()
            // e.currentTarget.value can be passed without tracking current value in state but may be useful to do so in the future.
          }}
        />
      </div>
    </ModalWrapper>
  ) : null
}
