import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ApartmentList from './pages/ApartmentsList'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'

function App() {

  return (
    <>
      <Navbar />
      <div id="main">
      <Sidebar />
      <Routes>
        <Route path="/" element={<ApartmentList />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </div>
      <Footer />
      
      
    </>
  )
}

export default App
