import type { NextPage } from 'next'
import { P, H2 } from '../styles/comps/Posts.styled'

interface PostsProps {
  posts: {
    author: string
    createdAt: string
    id: string
    score: number
    text: string
    title: string
    type: string
    updatedAt: string
    url: string
    __typename: string
  }
}

const Posts: NextPage<PostsProps> = (props) => {
  const { posts }: PostsProps = props
  console.log('launches', posts);
  return (
    <div>
      <P>Discover more about mens health</P>
      <H2>Explore the PocketMD Journal</H2>
      {/* <h1>{posts[0].author}</h1> */}
    </div>
  )
}

export default Posts
