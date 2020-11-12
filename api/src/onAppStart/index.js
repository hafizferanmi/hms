import createDefaultAdmin from './createDefaultAdmin'
import connectDB from './db'
import runCronJobs from './cron'

export default () => {
  connectDB()
  createDefaultAdmin()
  runCronJobs()
}
