import { Request, Response } from 'express'
import UpdateUserAvatarService from '../services/UpdateUserAvatar'

class UserAvatarController {
	public async update(req: Request, res: Response): Promise<Response> {
		const updateUserAvatar = new UpdateUserAvatarService()

		const user = await updateUserAvatar.execute({
			user_id: req.user.id,
			avatarFilename: req.file.filename,
		})
		return res.json(user)
	}
}

export { UserAvatarController }
