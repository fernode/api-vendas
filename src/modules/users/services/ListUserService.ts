import { UsersRepository } from '../typeorm/repository/UsersRepository'

class ListUserService {
	public async execute() {
		const users = await UsersRepository.find()
		return users
	}
}

export { ListUserService }
