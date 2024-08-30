import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './frontend/components/Navbar'
import Home from './frontend/pages/Home'
import Posts from './frontend/pages/Posts'
import Users from './frontend/pages/Users'
import Todos from './frontend/pages/Todos'
import Products from './frontend/pages/Products'
import { Provider } from 'react-redux'
import { store } from './frontend/redux/store'

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
