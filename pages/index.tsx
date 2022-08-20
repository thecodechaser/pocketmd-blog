import type { NextPage } from 'next'
import Header from '../comps/header'
import styles from '../styles/Home.module.css'
import Footer from '../comps/footer'
import Hero from '../comps/hero'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
