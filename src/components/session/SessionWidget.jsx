import useSessionStore from '../../store/session-store'
import useStyles from '../../styles/app-styles'

export default function SessionWidget() {
  // the session store as the only means of getting timer data
  const { timeRemaining, phase, pomosCompleted, pomoTarget } = useSessionStore()

  const styles = useStyles().sessionWidget
  return (
    <div className={styles}>
      {phase === 'POMO' && (
        <>
          <div className='top-display'>work on poro</div>
          <div className='center-display'>{timeRemaining()}</div>
          <div className='bottom-display'>
            {`${pomosCompleted} of ${pomoTarget}`} 🍅
          </div>
        </>
      )}

      {phase === 'BREAK' && (
        <>
          <div className='top-display'>{timeRemaining()}</div>
          <div className='center-display'>relax</div>
        </>
      )}

      {phase === 'PAUSED' && (
        <>
          <div className='center-display'>o</div>
        </>
      )}
    </div>
  )
}
