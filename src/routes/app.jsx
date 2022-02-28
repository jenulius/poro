import Footer from '../components/app/Footer/Footer'
import Header from '../components/app/Header/Header'
import Widgets from '../components/app/Widgets/Widgets'   
import useStyles from '../styles/app-styles'
import { motion } from 'framer-motion'
import { useAnimationStore } from '../store/animations-store'

    
export default function AppRoute() {

  const styles = useStyles()
  const animations = useAnimationStore((s) => s.generic)

  return (
    <motion.main
      initial='initial'
      animate='animate'
      variants={animations}
      exit='exit'
      className={styles.appRoute}
    >
      <Header />
      <Widgets />
      <Footer />
    </motion.main>
  )
}
