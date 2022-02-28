import { useEffect } from 'react'
import { useModal } from '../../../lib/useModal'
import useStyles from '../../../styles/app-styles'
import IconBtn from '../../common/IconBtn'
import UserOptions from '../../common/UserOptions'

export default function Footer() {
  const styles = useStyles()
  const { modal } = useModal()

  return (
    <div className={styles.footer}>
      <IconBtn
        icon='/options'
        size='small'
        onClick={() => {
          modal(UserOptions, {}, modal)
        }}
      />
    </div>
  )
}
