import type { NextPage } from 'next'

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
    <p>{post.author}</p>
  )
}

export default PostCard;