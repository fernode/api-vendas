import AppErrors from '@shared/errors/appErrors'
import { genSalt, hash } from 'bcrypt'
import { addHours, isAfter } from 'date-fns'
import { UsersTokensRepository } from '../typeorm/repository/UserTokensRepository'
import { UsersRepository } from '../typeorm/repository/UsersRepository'

interface IRequest {
	token: string
	password: string
}

export class ResetPasswordService {
	public async execute({ token, password }: IRequest): Promise<void> {
		const usersRepository = UsersRepository
		const userTokensRepository = UsersTokensRepository

		const userToken = await userTokensRepository.findByToken(token)

		if (!userToken) {
			throw new AppErrors('User Token does not exists.')
		}

		const user = await usersRepository.findById(userToken.user_id)

		if (!user) {
			throw new AppErrors('User does not exists.')
		}

		const tokenCreatedAt = userToken.created_at
		const compareDate = addHours(tokenCreatedAt, 2)

		if (isAfter(Date.now(), compareDate)) {
			throw new AppErrors('Token expired.')
		}

		const salt = await genSalt(8)

		user.password = await hash(password, salt)
	}
}
