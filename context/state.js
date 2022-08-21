// context/state.js
import { createContext, useContext } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [sharedState, setSharedState] = useState()

  useEffect(() => {
    async function fetchData() {
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
      setSharedState({ posts: data.firstPageArticles })
    }
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
