import uploadConfig from '@config/uploads'
import AppError from '@shared/errors/appErrors'
import fs from 'fs'
import path from 'path'
import { User } from '../typeorm/entities/User'
import { UsersRepository } from '../typeorm/repository/UsersRepository'

interface IRequest {
	user_id: string
	avatarFilename: string
}

class UpdateUserAvatarService {
	public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
		const usersRepository = UsersRepository

		const user = await usersRepository.findById(user_id)

		if (!user) {
			throw new AppError('User not found.')
		}

		if (user.avatar) {
			const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
			const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)

			if (userAvatarFileExists) {
				await fs.promises.unlink(userAvatarFilePath)
			}
		}

		user.avatar = avatarFilename

		await usersRepository.save(user)

		return user
	}
}

export default UpdateUserAvatarService
