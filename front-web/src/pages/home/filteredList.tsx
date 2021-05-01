import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import { User } from '../../types'

import Loading from '../../components/loading'
import HandleError from '../../components/handleError'
import UserDetail from '../../components/userDetail'

const LIST_USERS = gql`
  query list ($search: String) {
    list (search: $search) {
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

const FilteredList = ({ search }: { search: string }) => {
  const { loading, error, data } = useQuery<{ list: User[] }>(LIST_USERS, {
    variables: {
      search,
    },
  })

  if (loading) return <Loading />
  if (error || data === undefined) return <HandleError />

  const listOfUser = data.list.map(user => (
    <Link to={`/${user._id}`} key={user.index}>
      <UserDetail user={user} />
    </Link>
  ))

  return (
    <>
      {listOfUser}
    </>
  )
}

export default FilteredList
