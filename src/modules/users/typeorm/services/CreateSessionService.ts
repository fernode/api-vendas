import AppErrors from '@shared/errors/appErrors'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { User } from '../entities/User'
import { UsersRepository } from '../repository/UsersRepository'

type CreateSessionUserParams = {
	email: string
	password: string
}

type CreateSessionServiceResponse = {
	user: User
	token: string
}

class CreateSessionService {
	public async create({
		email,
		password,
	}: CreateSessionUserParams): Promise<CreateSessionServiceResponse> {
		const userRepository = UsersRepository
		const user = await userRepository.findByEmail(email)

		if (!user) {
			throw new AppErrors('Incorrect email/password combination.', 401)
		}

		const passwordConfirmed = await compare(password, user.password)

		if (!passwordConfirmed) {
			throw new AppErrors('Incorrect email/password combination.', 401)
		}

		const token = sign(
			{
				data: {
					id: user.id,
				},
			},
			'b19f9beac0197df92f41529f7165ded5',
			{
				expiresIn: '1d',
			},
		)

		return {
			user,
			token,
		}
	}
}

export { CreateSessionService }
