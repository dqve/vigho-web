import './App.css'

import Home from './Pages/HomePage/Home'
import Network from './Pages/NetworkPage/Network'
import Privacy from './Pages/PrivacyPage/Privacy'
import Terms from './Pages/TermsPage/Terms'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <ToastContainer
        position='top-center'
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/network' element={<Network />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
    </Router>
  )
}

export default App
