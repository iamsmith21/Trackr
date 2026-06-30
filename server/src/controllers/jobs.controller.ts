import { Request, Response } from 'express'
import { Job, CreateJobInput } from '../types/index'
import { prisma } from '../lib/prisma'

export const getAllJobs = async (
  req: Request,
  res: Response
): Promise<void> => {
  const jobs = await prisma.job.findMany()

  res.json({
    success: true,
    data: jobs,
  })
}
// export const getAllJobs = (req: Request, res: Response): void => {
//   res.json({
//     success: true,
//     data: jobs,
//   })
// }

export const createJob = async (req: Request, res: Response): Promise<void> => {
  const body = req.body as CreateJobInput

  const newJob = await prisma.job.create({
    data: {
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
  try {
    await prisma.job.delete({ where: { id: id } })

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

  try {
    const updatedJob = await prisma.job.update({
      where: { id: id },
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
