import { AppDataSource } from '@shared/infra/typeorm'
import { User } from '../entities/User'

export const UsersRepository = AppDataSource.getRepository(User).extend({
	async findByEmail(email: string): Promise<User | null> {
		const user = await this.findOne({
			where: { email },
		})

		return user
	},
	async findById(id: string): Promise<User | null> {
		const user = await this.findOne({
			where: { id },
		})

		return user
	},
	async findbyName(name: string): Promise<User | null> {
		const user = await this.findOne({
			where: { name },
		})

		return user
	},
})
