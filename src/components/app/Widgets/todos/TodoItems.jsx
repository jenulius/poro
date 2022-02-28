import { useNavigate } from 'react-router-dom'
import useStyles from '../../../../styles/app-styles'
import TodoItem from './TodoItem'

export default function TodoItems({ todos }) {
  const styles = useStyles().todoItems

  const navigate = useNavigate()

  function launchSession(todoId) {
    // set todo to session
    navigate('/session')
  }

  return (
    <div className={styles}>
      {todos.map((t) => (
        <TodoItem {...t} key={t.id} onLaunchSession={launchSession} />
      ))}
    </div>
  )
}
