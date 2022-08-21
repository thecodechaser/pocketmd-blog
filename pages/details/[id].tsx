import { useAppContext } from '../../context/state'
import Footer from '../../comps/footer'
import Header from '../../comps/header'
import { useRouter } from 'next/router'
import { H2, H4, P, A } from '../../styles/comps/Details.styled'
import { useState } from 'react'
import Axios from 'axios'
import Link from 'next/link'

const Details = () => {
  const [image, setImage] = useState()
  const state = useAppContext()
  const router = useRouter()
  const ID = router.query.id
    const post = state.posts.filter((element: { id: string | string[] | undefined })=> element.id == ID);

      async function myFunction() {
        return Axios.get(` https://jsonlink.io/api/extract?url=${post[0].url}`)
      }
  
      myFunction().then(function (value) {
        setImage(value.data.images[0])
      })

  if (state)
    return (
      <div>
        <Header />
        <div>
          <H2>{post[0].title}</H2>
          <H4>Author: {post[0].author}, Created at: {post[0].createdAt}</H4>
          <div className="detailsImgC">
          <img src={image} alt="preview" height="400" width="600" />
          </div>
          <P>{post[0].text}</P>
          <Link href={post[0].url}><A>Click to read the original post</A></Link>
        </div>
        <Footer />
      </div>
    )
}

export default Details
