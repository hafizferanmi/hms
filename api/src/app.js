import express from 'express'
import bodyParser from 'body-parser'
import Debug from 'debug'
import cors from 'cors'
import onAppStart from './onAppStart'
import routes from './routes'

onAppStart()
const debug = Debug('API:app.js')
const app = express()
const port = 3001
const {
  adminRoutes,
  companyRoutes,
  staffRoutes,
  roomsRoute,
  roomTypesRoute,
  checkInroute,
  hallsRoute,
  hallBookingRoute,
  settingsRoute,
  bulkUploadRoute
} = routes

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('uploads'))

app.use('/admin', adminRoutes)
app.use('/company', companyRoutes)
app.use('/staff', staffRoutes)
app.use('/rooms', roomsRoute)
app.use('/roomTypes', roomTypesRoute)
app.use('/checkIn', checkInroute)
app.use('/hall', hallsRoute)
app.use('/booking', hallBookingRoute)
app.use('/settings', settingsRoute)
app.use('/bulkUpload', bulkUploadRoute)

app.get('/', (req, res) => res.json({ message: 'Welcome!' }))

app.listen(port, () => {
  console.log('Server is up and running on port ' + port)
  debug('Server is up and running on port ' + port)
})
