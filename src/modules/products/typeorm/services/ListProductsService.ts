import { Product } from '../entities/Product'
import { ProductsRepository } from '../repository/ProductsRepository'

export class ListProductService {
	public async execute(): Promise<Product[]> {
		const products = await ProductsRepository.find()
		return products
	}
}
