import AppErrors from '@shared/errors/appErrors'
import { Product } from '../typeorm/entities/Product'
import { ProductsRepository } from '../typeorm/repository/ProductsRepository'

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
