import express from 'express'
import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
} from '../controllers/jobs.controller'

const router = express.Router()

router.get('/', getAllJobs)
router.post('/', createJob)
router.delete('/:id', deleteJob)
router.put('/:id', updateJob)

export default router
