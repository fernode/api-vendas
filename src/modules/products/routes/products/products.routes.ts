import { Router } from 'express'
import { ProductsController } from '../../controllers/ProductsController'
import {
	ValidationBodyAndIdProduct,
	ValidationBodyProduct,
	ValidationId,
} from './validation'

const productsRouter = Router()
const productsController = new ProductsController()

productsRouter.get('/', productsController.index)
productsRouter.get('/:id', ValidationId, productsController.show)
productsRouter.post('/', ValidationBodyProduct, productsController.create)
productsRouter.put(
	'/:id',
	ValidationBodyAndIdProduct,
	productsController.update,
)
productsRouter.delete('/:id', ValidationId, productsController.delete)

export { productsRouter }
