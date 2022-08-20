import type { NextPage } from 'next'
import Header from '../comps/header'
import styles from '../styles/Home.module.css'
import Footer from '../comps/footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div>Your Next.js App</div>
      <Footer />
    </div>
  )
}

export default Home
