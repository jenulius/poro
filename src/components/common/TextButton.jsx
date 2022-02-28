import useStyles from '../../styles/app-styles'

export default function TextButton({ label }) {
  const styles = useStyles().textButton

  return <button className={styles}>{label}</button>
}
