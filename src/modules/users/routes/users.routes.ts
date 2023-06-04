import { Router } from 'express'
import { isAuthenticated } from '../../../shared/http/middlewares/isAuthenticated'
import { UserController } from '../controllers/UsersController'
import { validationBodyUsers } from './validation'

const usersRouter = Router()
const userController = new UserController()

usersRouter.get('/', isAuthenticated, userController.index)
usersRouter.post('/', validationBodyUsers, userController.create)

export { usersRouter }
