import { celebrate, Joi, Segments } from 'celebrate'

export const validationBodyUsers = celebrate({
	[Segments.BODY]: {
		name: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	},
})

export const validationBodySession = celebrate({
	[Segments.BODY]: {
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	},
})
