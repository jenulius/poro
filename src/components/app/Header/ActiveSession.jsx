import useSessionStore from '../../../store/session-store'
import useStyles from '../../../styles/app-styles'
import IconBtn from '../../common/IconBtn'

export default function ActiveSession() {
  const styles = useStyles().activeSession
  const { timeRemaining } = useSessionStore()

  return (
    <div className={styles}>
      <div className='todo'>work on devs</div>
      <div className='time'>
        {timeRemaining()}
        {/* <IconBtn icon='pause' size='header' /> */}
      </div>
    </div>
  )
}
