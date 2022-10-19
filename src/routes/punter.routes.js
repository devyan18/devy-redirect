import { Router } from 'express'
import {
  createUrl,
  getUrl
} from '../controllers/punter.controllers.js'

const router = Router()

router.get('/:id', getUrl)

router.post('/', createUrl)

export default router
