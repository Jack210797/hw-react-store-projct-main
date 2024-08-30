import { useDispatch, useSelector } from 'react-redux'
import { PostInterface } from '../types/Post.interface'
import { AppDispatch } from '../redux/store'
import { fetchAllPosts, selectPosts, selectPostsError, selectPostsLoading } from '../redux/postsSlice'
import { useEffect } from 'react'

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const posts = useSelector(selectPosts)
  const isLoading = useSelector(selectPostsLoading)
  const error = useSelector(selectPostsError)

  useEffect(() => {
    dispatch(fetchAllPosts('https://jsonplaceholder.typicode.com/posts?_limit=20'))
  }, [dispatch])

  return (
    <div>
      <h1>Posts page</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <ul>{!!posts.length && posts.map((post: PostInterface) => <li key={post.id}>{post.title}</li>)}</ul>
      )}
    </div>
  )
}

export default Posts
