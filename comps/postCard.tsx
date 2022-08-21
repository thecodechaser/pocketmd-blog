import type { NextPage } from 'next'
import Link from 'next/link'
import {
  Main,
  Info,
  Button,
  H3,
  P,
  HR,
  Secondary,
} from '../styles/comps/PostCard.styled'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

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
  const [image, setImage] = useState()

  useEffect(() => {
    async function myFunction() {
      return Axios.get(` https://jsonlink.io/api/extract?url=${post.url}`)
    }

    myFunction().then(function (value) {
      setImage(value.data.images[0])
    })
  })

  return (
    <Main>
      <Secondary>
        <div>
          <img src={image} alt="preview" height="400" width="420" />
        </div>
        <Info>
          <H3>{post.title}</H3>
          <P>{post.text}</P>
          <Link
            href={{
              pathname: `/details/${post.id}`,
            }}
          >
            <Button>READ THIS ARTICLE</Button>
          </Link>
        </Info>
      </Secondary>
      <HR></HR>
    </Main>
  )
}

export default PostCard
