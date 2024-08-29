import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Users from './pages/Users'
import Todos from './pages/Todos'
import Products from './pages/Products'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <div className="container container-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/users" element={<Users />} />
              <Route path="/todos" element={<Todos />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
