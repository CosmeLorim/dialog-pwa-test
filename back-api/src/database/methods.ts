import _db from './_db'
import {
  ID,
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

export const findOne = ({
  _id,
}: {
  _id?: ID,
}) => _db.find(d => {
  const idIsEqual = d._id === _id

  return idIsEqual
})

export const findAll = () => {
  return _db
}
