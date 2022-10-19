import * as mongoose from 'mongoose'
import environments from './settings/environments.js'

const mongoConnect = async () => {
  return await mongoose.connect(environments.MONGO_URI)
}

export default mongoConnect
