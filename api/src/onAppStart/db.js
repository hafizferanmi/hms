import mongoose from 'mongoose'
import Debug from 'debug'

const debug = Debug('API:onAppStart/db.js')

const dbSetup = () => {
  debug('dbSetup()')
  const mongoURL = 'mongodb://localhost:27017/hms'

  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true)
  }

  mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
    .then(() => console.log('Connected to mongodb'))
    .catch((err) => console.error('Error connecting to MongoDB: ', err))
}

export default dbSetup
