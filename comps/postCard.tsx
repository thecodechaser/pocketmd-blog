import type { NextPage } from 'next'
import {Info} from '../styles/comps/PostCard.styled'

interface PostProps {
  post: {
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

const PostCard: NextPage<PostProps> = (props) => {
  const { post }: PostProps = props
  return (
    <div>
      <div>

      </div>
      <Info>
        <h3>{post.title}</h3>
      </Info>
    </div>
  )
}

export default PostCard
