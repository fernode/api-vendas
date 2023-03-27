import { AppDataSource } from '@shared/infra/typeorm'
import { User } from '../entities/User'

export const UsersRepository = AppDataSource.getRepository(User).extend({
	findByEmail(email: string): Promise<User | unknown> {
		return this.findOne({
			where: { email },
		})
	},
	findById(id: string): Promise<User | unknown> {
		return this.findOne({
			where: { id },
		})
	},
	findbyName(name: string): Promise<User | unknown> {
		return this.findOne({
			where: { name },
		})
	},
})
