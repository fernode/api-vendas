import { Router } from 'express'
import { UserController } from '../controllers/UsersController'
import { validationBodyUsers } from './validation'

const usersRouter = Router()
const userController = new UserController()

usersRouter.get('/', userController.index)
usersRouter.post('/', validationBodyUsers, userController.create)

export { usersRouter }
