import type { NextPage } from 'next'
import Header from '../comps/header'
import styles from '../styles/Home.module.css'
import Footer from '../comps/footer'
import Hero from '../comps/hero'
import Posts from '../comps/posts'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

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

const Home: NextPage<PostsProps> = (props) => {
  const { posts }: PostsProps = props
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Posts posts={posts}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://gql-technical-assignment.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query {
        firstPageArticles {
          id
          author
          createdAt
          score
          updatedAt
          title
          text
          type
          url
        }
      }
    `,
  })
  return {
    props: {
      posts: data.firstPageArticles,
    },
  }
}

export default Home
