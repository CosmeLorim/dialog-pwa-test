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

export const findAll = () => {
  return _db
}
