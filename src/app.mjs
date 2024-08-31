import express from 'express'
import { router } from './backend/routes/index.mjs'
import { errors } from 'celebrate'
import morgan from 'morgan'
import { errorHandler, cleanError } from './backend/midleware/error.mjs'
import authRouter from './backend/routes/auth.mjs'

const PORT = 3000
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(authRouter)
app.use(router)

app.use((req, res, next) => {
  console.log('Request body:', req.body)
  next()
})

app.use(errors())
app.use(errorHandler, cleanError)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
