import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/App.scss'
import './styles/Header.scss'
import './styles/Home.scss'

function App() {
  return (
    <Router>
      {/* can place Header outside of Routes, but then it will be rendered on every page */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
