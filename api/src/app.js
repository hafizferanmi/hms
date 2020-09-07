import express from 'express'
import bodyParser from 'body-parser'
import config from 'config'
import Debug from 'debug'
import onAppStart from './onAppStart'
import routes from './routes'

onAppStart()
const debug = Debug('API: App')
const app = express()
const port = config.get('port')
const { adminRoutes, companyRoutes, staffRoutes, roomsRoute, roomTypesRoute } = routes

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/admin', adminRoutes)
app.use('/company', companyRoutes)
app.use('/staff', staffRoutes)
app.use('/room', roomsRoute)
app.use('/roomTypes', roomTypesRoute)

app.get('/', (req, res) => res.json({ message: 'Welcome!' }))

app.listen(port, () => {
  debug('Server is up and running on port ' + port)
})
