import { motion } from 'framer-motion'
import BackgroundColor from './components/common/BackgroundColor'
import useStyles from './styles/app-styles'

export default function Page({ children }) {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <BackgroundColor />
      <div className='cont'>{children}</div>
    </div>
  )
}

/* 
act as a common parent to each route, for layout, styling etc.
passed in <Navigator />
*/
