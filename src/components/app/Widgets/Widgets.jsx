import useStyles from '../../../styles/app-styles'
import TodosWidget from './todos/TodosWidget'

export default function Widgets() {
  const styles = useStyles()

  return (
    <div className={styles.widgets}>
      <TodosWidget />
    </div>
  )
}
