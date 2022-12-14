import type { NextPage } from 'next'
import { P, H2, HR } from '../styles/comps/Posts.styled'
import PostCard from './postCard'

interface PostsProps {
  posts: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map: any
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

  posts2: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map: any
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
  const { posts2 }: PostsProps = props
  return (
    <div className="postMainC">
      <P>Discover more about mens health</P>
      <H2>Explore the PocketMD Journal</H2>
      <HR></HR>
      {posts.map(
        (post: {
          id: string
          author: string
          createdAt: string
          score: number
          text: string
          title: string
          type: string
          updatedAt: string
          url: string
          __typename: string
        }) => {
          return <PostCard key={post.id} post={post} />
        }
      )}
      {posts2.map(
        (post: {
          id: string
          author: string
          createdAt: string
          score: number
          text: string
          title: string
          type: string
          updatedAt: string
          url: string
          __typename: string
        }) => {
          return <PostCard key={post.id} post={post} />
        }
      )}
    </div>
  )
}

export default Posts
