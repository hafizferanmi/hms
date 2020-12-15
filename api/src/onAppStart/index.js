import createDefaultAdmin from './createDefaultAdmin'
import connectDB from './db'
import runCronJobs from './cron'

const isProduction = process.env.NODE_ENV === 'production'

const runOnAppStart = () => {
  connectDB()
  if (!isProduction) createDefaultAdmin()
  runCronJobs()
}

export default runOnAppStart
