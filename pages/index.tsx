import Header from '../comps/header'
import styles from '../styles/Home.module.css'
import Footer from '../comps/footer'
import Hero from '../comps/hero'
import Posts from '../comps/posts'
import {useAppContext} from '../context/state'

const Home = () => {
  const state = useAppContext()
  if(state) return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Posts posts={state.posts} />
      <Footer />
    </div>
  )
}

export default Home
