import _db from './_db'
import {
  User,
} from '../schema/types'

export const find = ({
  search,
}: {
  search: string,
}): User[] => _db.filter((d: User) => {
  const regex = new RegExp(search.toLowerCase().split(' ').join('|'))

  return regex.test(d.name.toLocaleLowerCase())
})
  /** TODO: adicionar consulta com regex */
  /** TODO: adicionar consulta em mais campos */
  const nameIsEqual = d.name === search

  return nameIsEqual
})

export const findAll = () => {
  return _db
}
