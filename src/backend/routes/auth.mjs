import { Router } from 'express'
import { postLoginHandler } from '../controllers/auth.mjs'
import { validateAuthPost } from '../midleware/validators/authValidators.mjs'
import { authenticateToken, generateToken } from '../midleware/auth.mjs'

const authRouter = Router()

authRouter.route('/login').post(validateAuthPost, postLoginHandler)

authRouter.route('/register').post(validateAuthPost, generateToken, (req, res) => {
  //   реєстрації нового користувача
  // ...
})

authRouter.route('/profile').get(validateAuthPost, authenticateToken, (req, res) => {
  //   отримання профілю користувача
  // ...
})

export default authRouter
