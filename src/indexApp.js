import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Header from './components/Header/Header'
function IndexApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
      </Routes>
    </Router>
  )
}

export default IndexApp
