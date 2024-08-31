import { Router } from 'express'
import { rootRouter } from './root.mjs'
import { usersRouter } from './users.mjs'
import { postsRouter } from './posts.mjs'
import { todosRouter } from './todos.mjs'
import { productRouter } from './products.mjs'

const router = Router()

router.use('/', rootRouter)
router.use('/users', usersRouter)
router.use('/posts', postsRouter)
router.use('/todos', todosRouter)
router.use('/products', productRouter)

export { router }
