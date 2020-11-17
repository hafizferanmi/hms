import mongoose from 'mongoose'
import config from 'config'
import Debug from 'debug'

const debug = Debug('API:onAppStart/db.js')

const dbSetup = () => {
  debug('dbSetup()')
  const mongoURL = config.get('mongoURL')

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
