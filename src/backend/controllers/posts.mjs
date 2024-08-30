const getPostsHandler = (req, res) => {
  res.send('Get posts route')
}
const postPostsHandler = (req, res) => {
  res.send('Post posts route')
}

const getPostByIdHandler = (req, res) => {
  const { postId } = req.params
  res.send(`Get post by Id route: ${postId}`)
}

const putPostByIdHandler = (req, res) => {
  const { postId } = req.params
  res.send(`Put post by Id route: ${postId}`)
}
const deletePostByIdHandler = (req, res) => {
  const { postId } = req.params
  res.send(`Delete post by Id route: ${postId}`)
}

export { getPostsHandler, postPostsHandler, getPostByIdHandler, putPostByIdHandler, deletePostByIdHandler }
