import type { NextPage } from 'next'
import Header from '../comps/header'
import styles from '../styles/Home.module.css'
import Footer from '../comps/footer'
import Hero from '../comps/hero'
import Posts from '../comps/posts'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Posts />
      <Footer />
    </div>
  )
}

export default Home
