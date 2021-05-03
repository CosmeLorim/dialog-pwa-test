import React from 'react'
import style from 'styled-components'
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
        eyeColor
        index
        picture
        company
        email
      }
    }
  }
`

const GridProfile = style.div`
  padding-top: 15px;
  display: flex;
  grid-gap: 15px;
`

const GridFriends = style.div`
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

const FriendDetail = () => {
  let { id } = useParams<{ id: string }>()
  const { loading, error, data } = useQuery<{ find: User | null }>(GET_FRIEND_DETAILS, {
    variables: {
      _id: id,
    },
  })

  if (loading) return <Loading />
  if (error || data === undefined) return <HandleError error={error} />

  if (data.find === null) return <PageNotFound />

  const friends = data.find.friends.map(f => (
    <FriendProfile user={f} key={f.index} />
  ))

  return (
    <div>
      <Header search={(v: string) => { console.log({ v }) }} />
      <GridProfile>
        <img
          width='100px'
          src={data.find.picture ?? ''}
          alt={`Foto de perfil de ${data.find.name ?? ''}`}
        />
        <div>
          <p>name: {data.find.name ?? ''}</p>
          <p>age: {data.find.age ?? ''}</p>
          <p>email: {data.find.email ?? ''}</p>
        </div>
      </GridProfile>
      <h2>Friends:</h2>
      <GridFriends>
        {friends}
      </GridFriends>
    </div>
  )
}

export default FriendDetail
