import { useAppContext } from '../context/state'
import Footer from '../comps/footer'
import Header from '../comps/header'

const Details = () => {
  const state = useAppContext()

  if (state)
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
}

export default Details
