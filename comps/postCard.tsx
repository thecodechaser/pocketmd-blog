import type { NextPage } from 'next'
import Link from 'next/link'
import { Info, Button } from '../styles/comps/PostCard.styled'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

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
  const { post }: PostProps = props;
  const [image, setImage] = useState();

  useEffect(() => {
    async function myFunction() {
      return Axios.get(` https://jsonlink.io/api/extract?url=${post.url}`);
    }
   
    myFunction().then(
      function(value) { setImage(value.data.images[0]) },
    );
  }, );
  

  console.log(image)
  return (
    <div>
      <div><img src={image} alt="preview" height="200" width="200"/></div>
      <Info>
        <h3>{post.title}</h3>
        <p>{post.text}</p>
        <Link href="/"><Button>READ THIS ARTICLE</Button></Link>
      </Info>
    </div>
  )
}

export default PostCard
