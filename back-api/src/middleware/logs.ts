import { Request, Response } from 'express'

const logs = (req: Request, res: Response, next: Function) => {
  console.log('Log, origin:', req.headers.origin)

  next()
}

export default logs
