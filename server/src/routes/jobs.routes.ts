import express from 'express'
import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
  getJobById
} from '../controllers/jobs.controller'
import AuthHandler from '../middleware/auth.middleware'

const router = express.Router()

router.use(AuthHandler)
router.get('/', getAllJobs)
router.post('/', createJob)
router.delete('/:id', deleteJob)
router.put('/:id', updateJob)
router.get('/:id', getJobById)

export default router
