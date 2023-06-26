import AppErrors from '@shared/errors/appErrors'
import { ProductsRepository } from '../typeorm/repository/ProductsRepository'

type DeleteProductServiceParams = {
	id: string
}

class DeleteProductService {
	public async execute({ id }: DeleteProductServiceParams): Promise<void> {
		const product = await ProductsRepository.findOne({ where: { id } })

		if (!product) {
			throw new AppErrors('Product not found')
		}

		await ProductsRepository.remove(product)
	}
}

export { DeleteProductService }
