import AppErrors from '@shared/errors/appErrors'
import cors from 'cors'
import express, { Request, Response } from 'express'
import router from './routes'

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

app.use((error: Error, request: Request, response: Response) => {
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
})

app.listen(3333, () => console.log('Server is running on port 3333 🚀'))
