// context/stateTwo.js
import { createContext, useContext } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

const AppContext = createContext()

export function AppWrapper2({ children }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sharedState, setSharedState] = useState([])

  useEffect(() => {
    async function fetchData() {
      const client = new ApolloClient({
        uri: 'https://gql-technical-assignment.herokuapp.com/graphql',
        cache: new InMemoryCache(),
      })

      for (let i = 0; i < 17; i++) {
        const { data } = await client.query({
          query: gql`
            query {
              retrievePageArticles(page: 8) {
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
        sharedState.push(...data.retrievePageArticles)
      }
    }
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext2() {
  return useContext(AppContext)
}
