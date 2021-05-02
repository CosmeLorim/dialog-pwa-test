import React from 'react'
import { Link } from 'react-router-dom'
import style from 'styled-components'

import InputSearch from './inputSearch'

const Grid = style.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;

  .col2 {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`

const Header = ({ search }: { search: Function }) => {
  return (
    <header className="App-header">
      <Grid>
        <div className='col1'>
          <Link to='/'>
            <h1>MySocial</h1>
          </Link>
        </div>
        <div className='col2'>
          <InputSearch msForSearch={1000} search={search} />
        </div>
      </Grid>
    </header>
  )
}

export default Header
