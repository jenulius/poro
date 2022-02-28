import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useModal } from '../../../../lib/useModal'
import IconBtn from '../../../common/IconBtn'
import TodoInfo from './TodoInfo'

export default function TodoItem({ id, desc, onLaunchSession }) {
  const [hovering, setHovering] = useState(null)
  const { modal } = useModal()
  const navigate = useNavigate()

  function handleModalClose(payload) {
    modal()
  }

  return (
    <>
      <div
        className='item'
        onMouseOver={() => setHovering(id)}
        onMouseLeave={() => setHovering(null)}
        key={id}
        onClick={() =>
          modal(TodoInfo, { id, onLaunchSession }, handleModalClose)
        }
      >
        <div className='left'>
          <input type='checkbox' />
          <div className='desc'>{desc}</div>
        </div>
        <div className='right'>
          {hovering === id && (
            <IconBtn
              icon='play'
              size='small'
              link='/session'
              onClick={(e) => {
                e.stopPropagation()
                onLaunchSession(id)
              }}
            />
          )}{' '}
        </div>
      </div>
    </>
  )
}
