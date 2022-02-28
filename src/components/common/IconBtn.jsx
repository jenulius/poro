import { Link } from 'react-router-dom'
import useStyles from '../../styles/app-styles'

export default function IconBtn({ icon, onClick, size }) {
  const styles = useStyles().iconBtn

  return (
    <div className={styles} onClick={onClick}>
      <img src={`/svg-icons/${icon}.svg`} alt={icon} className={`sz-${size}`} />
    </div>
  )
}
