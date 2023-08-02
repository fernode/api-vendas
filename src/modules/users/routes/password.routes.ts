import { Joi, Segments, celebrate } from 'celebrate'
import { Router } from 'express'
import { ForgotPasswordController } from '../controllers/ForgotPasswordController'

const passwordRoutes = Router()
const forgotPasswordController = new ForgotPasswordController()

passwordRoutes.post(
	'/forgot',
	celebrate({
		[Segments.BODY]: {
			email: Joi.string().email().required(),
		},
	}),
	forgotPasswordController.create,
)

export { passwordRoutes }
