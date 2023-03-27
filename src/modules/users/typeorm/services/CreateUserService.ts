import AppErrors from '@shared/errors/appErrors'
import { User } from '../entities/User'
import { UsersRepository } from '../repository/UsersRepository'

type CreateUserServiceParams = {
	name: string
	email: string
	password: string
}

class CreateUserService {
	public async execute({
		name,
		email,
		password,
	}: CreateUserServiceParams): Promise<User> {
		const userRepository = UsersRepository

		const userExists = await userRepository.findByEmail(email)

		if (userExists) {
			throw new AppErrors('User already exists')
		}

		const user = userRepository.create({
			name,
			email,
			password,
		})

		await userRepository.save(user)

		return user
	}
}

export { CreateUserService }
