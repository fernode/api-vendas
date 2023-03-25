import { Joi, Segments, celebrate } from 'celebrate'

export const ValidationId = celebrate({
	[Segments.PARAMS]: {
		id: Joi.string().uuid().required(),
	},
})

export const ValidationBodyProduct = celebrate({
	[Segments.BODY]: {
		name: Joi.string().required(),
		price: Joi.number().required(),
		quantity: Joi.number().required(),
	},
})

export const ValidationBodyAndIdProduct = celebrate({
	[Segments.BODY]: {
		name: Joi.string().required(),
		price: Joi.number().required(),
		quantity: Joi.number().required(),
	},
	[Segments.PARAMS]: {
		id: Joi.string().uuid().required(),
	},
})
