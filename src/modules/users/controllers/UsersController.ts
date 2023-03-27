import { Request, Response } from 'express'
import { CreateUserService } from '../typeorm/services/CreateUserService'
import { ListUserService } from '../typeorm/services/ListUserService'

class UserController {
	public async index(req: Request, res: Response): Promise<Response> {
		const listUserService = new ListUserService()

		const users = await listUserService.execute()

		return res.json(users)
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const { name, email, password } = req.body

		const createUser = new CreateUserService()

		const user = await createUser.execute({
			name,
			email,
			password,
		})

		return res.json(user)
	}
}

export { UserController }
