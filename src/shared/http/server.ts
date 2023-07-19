import uploadConfig from '@config/uploads'
import AppErrors from '@shared/errors/appErrors'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import router from './routes'

dotenv.config()

import { AppDataSource } from '@shared/infra/typeorm'
import { errors } from 'celebrate'

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

app.use(errors())
app.use('/files', express.static(uploadConfig.directory))

AppDataSource.initialize()

app.use(
	(error: Error, request: Request, response: Response, _next: NextFunction) => {
		if (error instanceof AppErrors) {
			return response.status(error.statusCode).json({
				status: 'error',
				message: error.message,
			})
		}

		return response.status(500).json({
			status: 'error',
			message: 'Internal server error',
		})
	},
)

app.listen(3333, () => console.log('Server is running on port 3333 🚀'))
