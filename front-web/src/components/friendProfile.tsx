import React from 'react'

import { People, User } from '../types'

const FriendProfile = ({
  user,
}: {
  user: User | People,
}) => {
  return (
    <div>
      <img src={user.picture ?? ''} alt={`Foto de perfil de ${user.name ?? ''}`}/>
      <p>name: {user.name ?? ''}</p>
      <p>age: {user.age ?? ''}</p>
      <p>eyeColor: {user.eyeColor ?? ''}</p>
      <p>company: {user.company ?? ''}</p>
      <p>email: {user.email ?? ''}</p>
    </div>
  )
}

export default FriendProfile
