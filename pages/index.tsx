import Header from '../comps/header'
import styles from '../styles/Home.module.css'
import Footer from '../comps/footer'
import Hero from '../comps/hero'
import Posts from '../comps/posts'
import { useAppContext } from '../context/state'
import { useAppContext2 } from '../context/stateTwo'

const Home = () => {
  const state = useAppContext()
  const state2 = useAppContext2()
  if (state)
    return (
      <div className={styles.container}>
        <Header />
        <Hero />
        <Posts posts={state} posts2={state2} />
        <Footer />
      </div>
    )
}

export default Home
