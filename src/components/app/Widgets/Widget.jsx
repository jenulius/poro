import useSession from '../../../lib/useSession'
import useStyles from '../../../styles/app-styles'

export default function Widget({ title, count, children, action }) {
  const { widget } = useStyles()

  return (
    <div className={widget}>
      <div className='header'>
        <div className='title'>
          <div>{title}</div>
          <div className='action' onClick={action}>
            +
          </div>
        </div>
        <div className='count'>{count}</div>
      </div>
      <div className='body'>{children}</div>
    </div>
  )
}
