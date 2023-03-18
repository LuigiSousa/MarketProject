import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'

import Home from './pages/main/home'
import Market from './pages/main/market'
import Cart from './pages/main/cart'

import PageNotFound from './pages/error/pagenotfound'

import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/market">Market</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
