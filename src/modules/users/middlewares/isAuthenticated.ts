import auth from '@config/auth'
import AppErrors from '@shared/errors/appErrors'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function isAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction,
): void {
	const authHeader = request.headers.authorization

	if (!authHeader) {
		throw new AppErrors('JWT token is missing.', 401)
	}

	const [, token] = authHeader.split(' ')
	try {
		const decoded = verify(token, auth.jwt.secret)
		if (decoded) {
			return next()
		}
	} catch (err) {
		throw new AppErrors('Invalid JWT token.', 401)
	}
}
