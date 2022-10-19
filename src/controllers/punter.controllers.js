import PunterModel from '../models/punter.model.js'

const getUrl = async (req, res) => {
  try {
    const urlId = req.params.id
    const url = await PunterModel.findById(urlId)
    res.status(200).json(url)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const createUrl = async (req, res) => {
  try {
    const url = req.body.url
    const newUrl = await PunterModel.create({ url })
    res.status(201).json({ url: newUrl._id })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export { getUrl, createUrl }
