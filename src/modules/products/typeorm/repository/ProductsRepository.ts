import { AppDataSource } from '@shared/infra/typeorm'
import { Product } from '../entities/Product'

export const ProductsRepository = AppDataSource.getRepository(Product).extend({
	findByName(name: string): Promise<Product | unknown> {
		return this.findOne({
			where: { name },
		})
	},
})
