import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export default function AuthHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      success: false,
      message: 'No token provided',
    })

    return
  }

  const token = authHeader?.split(' ')[1]
  if (!token) {
    res.status(401).json({ success: false, message: 'Invalid token' })
    return
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string
    }
    //we got the userId from the jwt.sign payload we set in auth controller
    req.userId = decoded.userId
    next()
  } catch {
    res.status(401).json({ success: false, message: 'Invalid token' })
    return
  }
}
