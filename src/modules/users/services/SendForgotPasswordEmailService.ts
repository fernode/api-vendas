import { UsersTokensRepository } from '../typeorm/repository/UserTokensRepository'
import { UsersRepository } from '../typeorm/repository/UsersRepository'

export class SendForgotPasswordEmailService {
	async execute(email: string): Promise<void> {
		const userRepository = UsersRepository
		const usersTokensRepository = UsersTokensRepository

		const user = await userRepository.findByEmail(email)

		if (!user) {
			throw new Error('User does not exists')
		}

		const token = usersTokensRepository.generate(user.id)

		console.log({ token })
	}
}
