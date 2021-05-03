import * as db from '../database'
import {
  ID,
  People,
  User,
} from '../schema/types'

export const resolvers = {
  Query: {
    list: (parent: null, { search }: { search?: string }): User[] => {
      if (search) return db.find({ search })

      return db.findAll()
    },
    find: (parent: null, { _id }: { _id: ID }): People | null => {
      const user = db.findOne({ _id })

      return user
    },
  },
  People: {
    __resolveType: () => {
      return 'User'
    }
  }
}
