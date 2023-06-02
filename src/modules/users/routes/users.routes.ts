import { Router } from 'express'
import { UserController } from '../controllers/UsersController'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { validationBodyUsers } from './validation'

const usersRouter = Router()
const userController = new UserController()

usersRouter.get('/', isAuthenticated, userController.index)
usersRouter.post('/', validationBodyUsers, userController.create)

export { usersRouter }
