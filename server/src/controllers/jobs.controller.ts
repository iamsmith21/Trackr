import { Request, Response } from 'express'
import { CreateJobInput } from '../types/index'
import { prisma } from '../lib/prisma'

export const getAllJobs = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = req.userId

  if (!user) {
    res.status(401).json({ success: false, message: 'Unauthorized' })
    return
  }

  const jobs = await prisma.job.findMany({ where: { userId: user } })

  res.json({
    success: true,
    data: jobs,
  })
}

export const createJob = async (req: Request, res: Response): Promise<void> => {
  const body = req.body as CreateJobInput
  const user = req.userId

  if (!user) {
    res.status(401).json({ success: false, message: 'Unauthorized' })
    return
  }

  const newJob = await prisma.job.create({
    data: {
      userId: user,
      company: body.company,
      role: body.role,
      jobUrl: body.jobUrl,
      status: body.status,
      notes: body.notes,
    },
  })

  res.status(201).json({
    success: true,
    data: newJob,
  })
}

export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string
  const user = req.userId

  if (!user) {
    res.status(401).json({ success: false, message: 'Unauthorized' })
    return
  }

  try {
    await prisma.job.delete({ where: { id: id, userId: user } })

    res.json({
      success: true,
      message: 'Job deleted',
    })
  } catch {
    res.status(404).json({
      success: false,
      message: 'Job not found to be deleted',
    })
  }
}

export const updateJob = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string
  const body = req.body as CreateJobInput
  const user = req.userId

  if (!user) {
    res.status(401).json({ success: false, message: 'Unauthorized' })
    return
  }

  try {
    const updatedJob = await prisma.job.update({
      where: { id: id, userId: user },
      data: { ...body },
    })
    res.json({
      success: true,
      data: updatedJob,
    })
  } catch {
    res
      .status(400)
      .json({ success: false, message: 'No such job found to update' })
  }
}
