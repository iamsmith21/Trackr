import { Request, Response } from 'express'
import { v4 as uuid4 } from 'uuid'
import { Job, CreateJobInput } from '../types/index'

const jobs: Job[] = []

export const getAllJobs = (req: Request, res: Response): void => {
  res.json({
    success: true,
    data: jobs,
  })
}

export const createJob = (req: Request, res: Response): void => {
  const body = req.body as CreateJobInput

  const newJob: Job = {
    id: uuid4(),
    company: body.company,
    role: body.role,
    jobUrl: body.jobUrl,
    status: body.status,
    notes: body.notes,
    appliedAt: new Date().toISOString(),
  }

  jobs.push(newJob)

  res.status(201).json({
    success: true,
    data: newJob,
  })
}

export const deleteJob = (req: Request, res: Response): void => {
  const { id } = req.params
  const index = jobs.findIndex((job) => job.id === id)

  if (index === -1) {
    res.status(400).json({ success: false, message: 'Job not found' })
  }
  jobs.splice(index, 1) // to delete from the index and delete one element from that index i.e delete the element at that indx

  res.json({
    success: true,
    message: 'Job deleted',
  })
}

export const updateJob = (req: Request, res: Response): void => {
  const { id } = req.params
  const body = req.body as CreateJobInput

  const index = jobs.findIndex((j) => j.id === id)

  if (index === -1) {
    res
      .status(400)
      .json({ success: false, message: 'No such job found to update' })
    return
  }

  jobs[index] = { ...jobs[index], ...body }
  const updatedJob = jobs[index]

  res.json({
    success: true,
    data: updatedJob,
  })
}
