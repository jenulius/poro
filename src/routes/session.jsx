import IconBtn from '../components/common/IconBtn'
import GraphicBackground from '../components/session/GraphicBackground'
import SessionWidget from '../components/session/SessionWidget'
import useSession from '../lib/useSession'
import useSessionStore from '../store/session-store'
import useStyles from '../styles/app-styles'
import SessionConfiguration from '../components/session/SessionConfiguration'


export default function SessionRoute() {
  const { phase, isPaused } = useSessionStore()

  const session = useSession()

  const styles = useStyles()
  return (
    <div className={styles.session}>
      <GraphicBackground />

      <div className={styles.header}>
        <div className='placeholder'></div>
        <div className='placeholder'></div>
        <div className='placeholder'></div>
      </div>
      <div className='center'>
        {/* <SessionWidget /> */}
        <SessionConfiguration />
        {!isPaused && phase === 'INITIAL' && (
          <IconBtn icon='bigplay' size='biggest' onClick={session.start} />
        )}
        {!isPaused && (phase === 'POMO' || phase === 'BREAK') && (
          <IconBtn icon='pause' size='biggest' onClick={session.pause} />
        )}
        {isPaused && (
          <IconBtn icon='bigplayblue' size='biggest' onClick={session.resume} />
        )}
      </div>
      <div className='footer'>
        <IconBtn icon='/complete' />
        <IconBtn icon='/back' link='/app' />
      </div>
    </div>
  )
}
