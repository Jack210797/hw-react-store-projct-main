dotenv.config()
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { removeCircularReferences } from '../controllers/auth.mjs'

const SECRET_KEY = process.env.SECRET_KEY

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

const generateToken = (user) => {
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined')
  }

  const payload = typeof user === 'object' && user !== null ? removeCircularReferences(user) : { id: user }

  try {
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' })
    return token
  } catch (error) {
    console.error('Помилка генерації токена:', error.message, error.stack)
    throw new Error('Не вдалося згенерувати токен')
  }
}

const requireAuth = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

export { authenticateToken, generateToken, requireAuth }
