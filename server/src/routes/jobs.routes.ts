import express from 'express'
import {
  createJob,
  getAllJobs,
  deleteJob,
} from '../controllers/jobs.controller'

const router = express.Router()

router.get('/', getAllJobs)
router.post('/', createJob)
router.delete('/:id', deleteJob)

export default router
