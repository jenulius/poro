import useStyles from '../../styles/app-styles'

export default function ModalWrapper({ children, onModalClick }) {
  const styles = useStyles().modal

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        onModalClick && onModalClick()
      }}
      className={styles}
    >
      {children}
    </div>
  )
}
