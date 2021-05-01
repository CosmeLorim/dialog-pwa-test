import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import { User } from '../../types'

import Loading from '../../components/loading'
import HandleError from '../../components/handleError'
import FriendProfile from '../../components/friendProfile'

const LIST_USERS = gql`
  query list {
    list {
      _id
      name
      age
      index
      picture
      company
      email
    }
  }
`

const List = () => {
  const { loading, error, data } = useQuery<{ list: User[] }>(LIST_USERS)

  if (loading) return <Loading />
  if (error || data === undefined) return <HandleError />

  const listOfUser = data.list.map(user => (
    <Link to={`/${user._id}`} key={user.index}>
      <FriendProfile user={user} />
    </Link>
  ))

  return (
    <>
      {listOfUser}
    </>
  )
}

export default List
