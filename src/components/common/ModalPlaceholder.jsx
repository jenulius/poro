import { useModal } from '../../lib/useModal'
import useStyles from '../../styles/app-styles'

export default function ModalPlaceholder() {
  const { show, Element, callback, data } = useModal()

  const styles = useStyles().modal
  return show ? (
    <div
      onClick={(e) => {
        e.stopPropagation()
        callback && callback()
      }}
      className={styles}
    >
      <Element {...data} />
    </div>
  ) : null
}
