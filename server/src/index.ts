import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.port || 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  console.log('GET request')
  res.json('Server is healthy and running...')
})

//Importing the JOB routes
import router from './routes/jobs.routes'
app.use('/api/jobs', router)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
