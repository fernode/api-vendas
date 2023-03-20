import { Repository } from 'typeorm'
import { Product } from '../entities/Product'

export class ProductsRepository extends Repository<Product> {
	public async findByName(name: string): Promise<Product | undefined> {
		const product = await this.findOne({
			where: { name },
		})

		if (product) {
			return product
		}
	}
}
