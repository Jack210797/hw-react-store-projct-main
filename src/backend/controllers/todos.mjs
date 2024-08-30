const getTodosHandler = (req, res) => {
  res.send('Get todos route')
}
const postTodosHandler = (req, res) => {
  res.send('Post todos route')
}

const getTodoByIdHandler = (req, res) => {
  const { todoId } = req.params
  res.send(`Get todo by Id route: ${todoId}`)
}

const putTodoByIdHandler = (req, res) => {
  const { todoId } = req.params
  res.send(`Put todo by Id route: ${todoId}`)
}
const deleteTodoByIdHandler = (req, res) => {
  const { todoId } = req.params
  res.send(`Delete todo by Id route: ${todoId}`)
}

export { getTodosHandler, postTodosHandler, getTodoByIdHandler, putTodoByIdHandler, deleteTodoByIdHandler }
