import { Router } from 'express'
import { SessionsController } from '../controllers/SessionsController'

const sessionsController = new SessionsController()

const sessionsRoutes = Router()

sessionsRoutes.post('/', sessionsController.execute)

export { SessionsController, sessionsRoutes }
