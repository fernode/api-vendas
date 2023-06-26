import { Request, Response } from 'express'
import { CreateSessionService } from '../services/CreateSessionService'

class SessionsController {
	async execute(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body
		const session = new CreateSessionService()

		const user = await session.create({ email, password })

		return res.json(user)
	}
}

export { SessionsController }
