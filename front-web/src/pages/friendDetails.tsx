import React from 'react'
import { gql, useQuery } from '@apollo/client'
import {
  useParams,
} from 'react-router-dom'
import { User } from '../types'

import Loading from '../components/loading'
import HandleError from '../components/handleError'
import PageNotFound from '../components/404'
import FriendProfile from '../components/friendProfile'
import Header from '../components/header'

const GET_FRIEND_DETAILS = gql`
  query ($_id: ID!) {
    find (_id: $_id) {
      _id
      picture
      name
      age
      email
      friends {
        _id
        name
        age
        index
        picture
        company
        email
      }
    }
  }
`

const FriendDetail = () => {
  let { id } = useParams<{ id: string }>()
  const { loading, error, data } = useQuery<{ find: User | null }>(GET_FRIEND_DETAILS, {
    variables: {
      _id: id,
    },
  })

  if (loading) return <Loading />
  if (error || data === undefined) return <HandleError />

  if (data.find === null) return <PageNotFound />

  const friends = data.find.friends.map(f => (
    <FriendProfile user={f} key={f.index} />
  ))

  return (
    <div>
      <Header search={(v: string) => { console.log({ v }) }} />
      <img src={data.find.picture ?? ''} alt={`Foto de perfil de ${data.find.name ?? ''}`} />
      {data.find.name ?? ''}
      <p>age: {data.find.age ?? ''}</p>
      <p>email: {data.find.email ?? ''}</p>

      <h2>Friends:</h2>
      {friends}
    </div>
  )
}

export default FriendDetail
