import { productsRouter } from '@modules/products/routes/products/products.routes'
import { Router } from 'express'

const router = Router()

router.use('/products', productsRouter)

export default router
