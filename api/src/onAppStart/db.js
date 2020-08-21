import mongoose from 'mongoose'
import config from 'config'

const dbSetup = () => {
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
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB: ', err))
}

export default dbSetup
