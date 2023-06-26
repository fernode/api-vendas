import uploadConfig from '@config/uploads'
import { Router } from 'express'
import multer from 'multer'
import { isAuthenticated } from '../../../shared/http/middlewares/isAuthenticated'
import { UserAvatarController } from '../controllers/UserAvatarController'
import { UserController } from '../controllers/UsersController'
import { validationBodyUsers } from './validation'

const usersRouter = Router()
const userController = new UserController()
const userAvatarController = new UserAvatarController()

const upload = multer(uploadConfig)

usersRouter.get('/', isAuthenticated, userController.index)
usersRouter.post('/', validationBodyUsers, userController.create)
usersRouter.patch(
	'/avatar',
	isAuthenticated,
	upload.single('avatar'),
	userAvatarController.update,
)

export { usersRouter }
