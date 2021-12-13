import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'

import Agent from './Pages/Agent/Agent'
function IndexApp() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/agent' element={<Agent />} exact />
      </Routes>
    </Router>
  )
}

export default IndexApp
