import { useAppContext } from '../context/state'

const Details = () => {
  const state = useAppContext()
  console.log(state)

  if (state) return <p>Hello{state.posts[0].author}</p>
}

export default Details