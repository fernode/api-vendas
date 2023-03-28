import AppErrors from '@shared/errors/appErrors'
import { AppDataSource } from '@shared/infra/typeorm'
import { User } from '../entities/User'

export const UsersRepository = AppDataSource.getRepository(User).extend({
	async findByEmail(email: string): Promise<User> {
		const user = await this.findOne({
			where: { email },
		})

		if (!user) {
			throw new AppErrors('User not found.', 404)
		}

		return user
	},
	async findById(id: string): Promise<User> {
		const user = await this.findOne({
			where: { id },
		})

		if (!user) {
			throw new AppErrors('User not found.', 404)
		}

		return user
	},
	async findbyName(name: string): Promise<User> {
		const user = await this.findOne({
			where: { name },
		})

		if (!user) {
			throw new AppErrors('User not found.', 404)
		}

		return user
	},
})
