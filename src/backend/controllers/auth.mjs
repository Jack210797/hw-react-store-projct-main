import { generateToken } from '../midleware/auth.mjs'

function removeCircularReferences(obj) {
  const seen = new WeakSet()
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return
        }
        seen.add(value)
      }
      return value
    })
  )
}

const postLoginHandler = async (req, res) => {
  if (!req.body) {
    return res.status(400).json(removeCircularReferences({ message: 'Request body is missing' }))
  }
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json(removeCircularReferences({ message: 'Username and password are required' }))
  }
  console.log(req.body)
  if (username === 'admin' && password === 'password') {
    const user = { id: 1, username: 'admin' }
    try {
      const token = await generateToken(user)
      res.send(removeCircularReferences({ token }))
    } catch (error) {
      res.status(500).send(removeCircularReferences({ message: 'Error generating token' }))
    }
  } else {
    res.status(401).send(removeCircularReferences({ message: 'Invalid credentials' }))
  }
}

export { postLoginHandler, removeCircularReferences }
