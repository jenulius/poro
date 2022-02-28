import { useState } from 'react'
import { emitCustomEvent } from 'react-custom-events'
import useTodosStore from '../../../../store/todos-store'
import Widget from '../Widget'
import QuickAdd from './QuickAdd'
import TodoItems from './TodoItems'

export default function TodosWidget() {
  const { todos } = useTodosStore()

  return (
    <Widget
      title='todos'
      action={() => emitCustomEvent('quickadd')}
      count={todos.length}
    >
      <QuickAdd />
      {/* onComplete onDelete */}
      <TodoItems todos={todos} />
    </Widget>
  )
}
