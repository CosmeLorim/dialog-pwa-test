import React from 'react'
import { Link } from 'react-router-dom'

import InputSearch from './inputSearch'

const Header = ({ search }: { search: Function }) => {
  return (
    <header className="App-header">
      <Link to='/'>
        <h1>MySocial</h1>
      </Link>
      <InputSearch msForSearch={1000} search={search} />
    </header>
  )
}

export default Header
