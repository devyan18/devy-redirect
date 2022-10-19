import * as mongoose from 'mongoose'

const { Schema, model } = mongoose

const punterSchema = new Schema({
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default model('Punter', punterSchema)
