import AppErrors from '@shared/errors/appErrors'
import { AppDataSource } from '@shared/infra/typeorm'
import { UserToken } from '../entities/UserToken'

export const UsersTokensRepository = AppDataSource.getRepository(
	UserToken,
).extend({
	async findByToken(token: string): Promise<UserToken | null> {
		const userToken = await this.findOne({
			where: { token },
		})

		if (!userToken) {
			throw new AppErrors('Token not found.', 404)
		}

		return userToken
	},
	async generate(user_id: string): Promise<UserToken | null> {
		try {
			const userToken = this.create({
				user_id,
			})

			await this.save(userToken)

			return userToken
		} catch (error) {
			throw new AppErrors(
				`An error occured while save usertoken. ${error}`,
				500,
			)
		}
	},
})
