import { useState, useEffect } from 'react'
import useStyles from '../../../styles/app-styles'
import dayjs from 'dayjs'
import ActiveSession from './ActiveSession'

export default function Header() {
  const styles = useStyles()

  const [timestr, setTimestr] = useState(`${dayjs().format('hh:mm')}`)
  const [monthstr] = useState(
    `${dayjs().format('MMMM').toLocaleLowerCase()}, ${dayjs().format('DD')}`
  )
  const [daystr] = useState(`${dayjs().format('dddd').toLocaleLowerCase()}`)

  // clock logic (dayjs and update)
  useEffect(() => {
    let clock = setInterval(() => {
      let timestr = `${dayjs().format('hh:mm')}`
      setTimestr(timestr)
    }, 1000)

    return () => clearInterval(clock)
  })

  return (
    <div className={styles.header}>
      <div className='left'>
        <div className='month-date'>{monthstr}</div>
        <div className='day'>{daystr}</div>
      </div>
      <div className='center'>
        <ActiveSession />
      </div>
      <div className='right'>{timestr}</div>
    </div>
  )
}
