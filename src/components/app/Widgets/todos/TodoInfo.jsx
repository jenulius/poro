import useTodosStore from '../../../../store/todos-store'
import useStyles from '../../../../styles/app-styles'
import IconBtn from '../../../common/IconBtn'

export default function TodoInfo({ id, onLaunchSession }) {
  const t = useTodosStore((s) => s.todos.filter((t) => t.id === id)[0])

  // const months = [
  //   'january',
  //   'february',
  //   'march',
  //   'april',
  //   'may',
  //   'june',
  //   'july',
  //   'august',
  //   'september',
  //   'october',
  //   'november',
  //   'december',
  // ]
  // const d = new Date(t.timeCreated.seconds * 1000)
  // const date = `created on ${d.getDate()} ${
  //   months[d.getMonth()]
  // } at ${d.getHours()}:${d.getMinutes()}`

  const styles = useStyles().todoInfo
  return (
    <div
      className={styles}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <div className='top'>
        <div className='desc'>
          <div className='text'>{t.desc}</div>
          <div className='time'>created on feb 9 2021 9 ma</div>
        </div>
        <div className='action'>
          <IconBtn icon='/play' size='normal' onClick={onLaunchSession} />
        </div>
      </div>
      <div className='bottom'>
        <IconBtn icon='mini-complete' size='small' />
        <IconBtn icon='mini-delete' size='small' />
      </div>
    </div>
  )
}
