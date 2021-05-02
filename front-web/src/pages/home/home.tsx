import React, { useState } from 'react'

import Header from '../../components/header'
import List from './list'

const Home = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <Header search={(v: string) => setSearch(v)} />
      <List search={search} />
    </div>
  )
}

export default Home
