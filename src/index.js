import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import environments from './settings/environments.js'

import mongoConnect from './database.js'

import punterRoutes from './routes/punter.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

app.use('/api/punter', punterRoutes)

app.listen(environments.PORT, () => {
  mongoConnect()
    .then(() => {
      console.log('Connected to MongoDB')
    })
  console.log(`Example app listening on port ${environments.PORT}!`)
})
