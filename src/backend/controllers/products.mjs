const getProductsHandler = (req, res) => {
  res.send('Get products route')
}
const postProductsHandler = (req, res) => {
  res.send('Post products route')
}

const getProductByIdHandler = (req, res) => {
  const { productId } = req.params
  res.send(`Get product by Id route: ${productId}`)
}

const putProductByIdHandler = (req, res) => {
  const { productId } = req.params
  res.send(`Put product by Id route: ${productId}`)
}
const deleteProductByIdHandler = (req, res) => {
  const { productId } = req.params
  res.send(`Delete product by Id route: ${productId}`)
}

export {
  getProductsHandler,
  postProductsHandler,
  getProductByIdHandler,
  putProductByIdHandler,
  deleteProductByIdHandler
}
