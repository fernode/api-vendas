import { Product } from '../typeorm/entities/Product'
import { ProductsRepository } from '../typeorm/repository/ProductsRepository'

export class ListProductService {
	public async execute(): Promise<Product[]> {
		const products = await ProductsRepository.find()
		return products
	}
}
