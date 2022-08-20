import type { NextPage } from 'next'
import Header from '../comps/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div>Your Next.js App</div>
    </div>
  )
}

export default Home
