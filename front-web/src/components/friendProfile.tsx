import React from 'react'
import style from 'styled-components'
import { Link } from 'react-router-dom'

import { People, User } from '../types'

const Container = style.div`
  padding: 20px;
  border: solid 1px;
  border-radius: 10px;
  border-color: #000;

  img {
    padding-bottom: 15px;
  }
`

const FriendProfile = ({
  user,
  to,
}: {
  user: User | People,
  to?: string,
}) => {
  return (
    <Container>
      {
        to ? (
          <Link to={to}>
            <img
              width='100%'
              src={user.picture ?? ''}
              alt={`Foto de perfil de ${user.name ?? ''}`}
            />
          </Link>
        )
          : (
            <img
              width='100%'
              src={user.picture ?? ''}
              alt={`Foto de perfil de ${user.name ?? ''}`}
            />
          )
      }
      <p>name: {user.name ?? ''}</p>
      <p>age: {user.age ?? ''}</p>
      <p>eyeColor: {user.eyeColor ?? ''}</p>
      <p>company: {user.company ?? ''}</p>
      <p>email: {user.email ?? ''}</p>
    </Container>
  )
}

export default FriendProfile
