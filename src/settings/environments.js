const { PORT, MONGO_URI } = process.env

const environments = {
  PORT: PORT || 3000,
  MONGO_URI: MONGO_URI || 'mongodb://localhost:27017/punters'
}

export default environments
