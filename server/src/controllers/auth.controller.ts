import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '../lib/prisma'
import { Request, Response } from 'express'

interface RegisterInput {
  firstname: string
  lastname: string
  email: string
  password: string
}

export async function registerUser(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body as RegisterInput
    const usr = await prisma.user.findUnique({ where: { email: body.email } })
    if (usr) {
      res.json({
        success: false,
        message: 'User with this email id already exists',
      })
      return
    }

    const { firstname, lastname, email, password } = body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: { firstname, lastname, email, password: hashedPassword },
    })

    const { password: _, ...userWithoutPassword } = newUser

    const token = jwt.sign(
      { userId: newUser.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    )

    res.json({
      success: true,
      token,
      user: userWithoutPassword,
      message: 'New User Created Successfully',
    })
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message || 'Something went wrong', error: error.toString(), stack: error.stack })
  }
}

export async function loginUser(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body

    const usr = await prisma.user.findUnique({ where: { email: email } })
    if (!usr) {
      res.status(404).json({ success: false, message: 'User not found' })
      return
    }

    const isPasswordValid = await bcrypt.compare(password, usr.password)

    if (!isPasswordValid) {
      res.status(401).json({
        success: false,
        message: 'Password is incorrect',
      })
      return
    }

    const token = jwt.sign(
      { userId: usr.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    )

    const { password: _, ...userWithoutPassword } = usr

    res.status(200).json({
      success: true,
      token,
      user: usr,
      message: 'User Logged in successfully',
    })
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message || 'Something went wrong', error: error.toString(), stack: error.stack })
  }
}
