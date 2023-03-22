import AppErrors from '@shared/errors/appErrors'
import { Product } from '../entities/Product'
import { ProductsRepository } from '../repository/ProductsRepository'

type ShowProductServiceParams = {
	id: string
}

export class ShowProductService {
	public async execute({
		id,
	}: ShowProductServiceParams): Promise<Product | unknown> {
		const product = await ProductsRepository.findOne({ where: { id } })

		if (!product) {
			throw new AppErrors('Product not found')
		}
		return product
	}
}
