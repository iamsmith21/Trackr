import express from 'express'
import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
} from '../controllers/jobs.controller'
import AuthHandler from '../middleware/auth.middleware'

const router = express.Router()

router.use(AuthHandler)
router.get('/', getAllJobs)
router.post('/', createJob)
router.delete('/:id', deleteJob)
router.put('/:id', updateJob)

export default router
