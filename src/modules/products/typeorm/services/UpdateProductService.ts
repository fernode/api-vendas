import AppErrors from '@shared/errors/appErrors'
import { Product } from '../entities/Product'
import { ProductsRepository } from '../repository/ProductsRepository'

type UpdateProductServiceParams = {
	id: string
	name: string
	price: number
	quantity: number
}

class UpdateProductService {
	public async execute({
		id,
		name,
		price,
		quantity,
	}: UpdateProductServiceParams): Promise<Product> {
		const product = await ProductsRepository.findOne({ where: { id } })

		if (!product) {
			throw new AppErrors('Product not found')
		}

		const productExists = await ProductsRepository.findByName(name)

		if (productExists && product.name !== name) {
			throw new AppErrors('Product already exists')
		}

		product.name = name
		product.price = price
		product.quantity = quantity

		await ProductsRepository.save(product)

		return product
	}
}

export { UpdateProductService }
