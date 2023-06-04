import auth from '@config/auth'
import AppErrors from '@shared/errors/appErrors'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
	data: { id: string }
	iat: number
	exp: number
}

export function isAuthenticated(
	request: Request,
	_response: Response,
	next: NextFunction,
): void {
	const authHeader = request.headers.authorization

	if (!authHeader) {
		throw new AppErrors('JWT token is missing.', 401)
	}

	const [, token] = authHeader.split(' ')
	try {
		const decoded = verify(token, auth.jwt.secret) as TokenPayload

		request.user = {
			id: decoded.data.id,
		}
		next()
	} catch (err) {
		throw new AppErrors('Invalid JWT token.', 401)
	}
}
