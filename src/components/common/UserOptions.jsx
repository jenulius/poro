import useStyles from '../../styles/app-styles'
import Div from '../utility/Div'
import TextButton from './TextButton'

export default function UserOptions() {
  const styles = useStyles().userOptions

  return (
    <Div className={styles}>
      <div className='heading'>poro early access (pre alpha 0.2)</div>
      <div className='options'>
        <div className='group'>
          <div className='body'>
            <div className='text'>
              hey, Jenul! It's been 20 days since poro was born and you've been
              a user for 10 out of those days :). Remember that you can always
              reach us with the feedback button in the bottom right corner or
              send me an email directly at{' '}
              <a href='mailto:jay@poroapp.com'>jay@poroapp.com</a>. We hope
              you'll love what we're building.
            </div>
            <TextButton label='sign out' />
          </div>
        </div>
      </div>
    </Div>
  )
}
