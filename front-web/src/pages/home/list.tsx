import React from 'react'
import gql from 'graphql-tag'
import style from 'styled-components'
import { useQuery } from '@apollo/client'

import { User } from '../../types'

import Loading from '../../components/loading'
import HandleError from '../../components/handleError'
import FriendProfile from '../../components/friendProfile'

const LIST_USERS = gql`
  query list ($search: String) {
    list (search: $search) {
      _id
      name
      age
      index
      picture
      eyeColor
      company
      email
    }
  }
`

const Grid = style.div`
  display: grid;
  grid-gap: 20px;

  @media only screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 621px) and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 851px) and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1101px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const List = ({ search }: { search: string }) => {
  const { loading, error, data } = useQuery<{ list: User[] }>(LIST_USERS, {
    variables: {
      search,
    },
  })

  if (loading) return <Loading />
  if (error || data === undefined) return <HandleError />

  const listOfUser = data.list.map(user => (
    <FriendProfile to={`/${user._id}`} key={user.index} user={user} />
  ))

  return (
    <Grid>
      {listOfUser}
    </Grid>
  )
}

export default List
