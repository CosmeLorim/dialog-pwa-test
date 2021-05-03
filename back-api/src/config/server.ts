import { ApolloServer } from 'apollo-server-express'
import * as morgan from 'morgan'
import * as express from 'express'
import * as cors from 'cors'

import schema from '../schema/schema'

import middlewareLogs from '../middleware/logs'

const app = express()

/** Logs mais genéricos da requisição */
app.use(morgan(':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time ms'))
/** Middleware de log mais personalizável */
app.use(middlewareLogs)
app.use(cors())

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema,
})
server.applyMiddleware({ app, path: '/graphql' })

export default app
