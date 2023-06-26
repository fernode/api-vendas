import AppErrors from '@shared/errors/appErrors'
import { Product } from '../typeorm/entities/Product'
import { ProductsRepository } from '../typeorm/repository/ProductsRepository'

type CreateProductServiceParams = {
	name: string
	price: number
	quantity: number
}

class CreateProductService {
	public async execute({
		name,
		price,
		quantity,
	}: CreateProductServiceParams): Promise<Product> {
		const productRepository = ProductsRepository

		const productExists = await productRepository.findByName(name)

		if (productExists) {
			throw new AppErrors('Product already exists')
		}

		const product = productRepository.create({
			name,
			price,
			quantity,
		})

		await productRepository.save(product)

		return product
	}
}

export { CreateProductService }
