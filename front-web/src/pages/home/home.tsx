import React, { useState } from 'react'

import Header from '../../components/header'
import List from './list'
import FilteredList from './filteredList'

const Home = () => {
  const [search, setSearch] = useState('')

  const list = search !== ''
    ? <FilteredList search={search} />
    : <List />

  return (
    <div>
      <Header search={(v: string) => setSearch(v)} />
      {list}
    </div>
  )
}

export default Home
