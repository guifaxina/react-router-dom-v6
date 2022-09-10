import Home from '../src/Pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './Pages/About'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage'

function App() {
  
  return (
        <Router >
          <nav>
            <Link to='/about'>About</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/'>Home</Link>
          </nav>
          <Routes> 
            <Route path="/" element={<Home />}/> 
            <Route path="/about" element={<About />}/> 
            <Route path="/profile" element={<Profile />}/> 
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </Router>
  )
}

export default App
