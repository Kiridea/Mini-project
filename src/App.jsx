import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ApartmentList from './pages/ApartmentsList'
import AparmentDetailPage from './pages/ApartmentDetailPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Navbar />
      <div id="main">
      <Sidebar />
      <Routes>
        <Route path="/ApartmentDetailsPage/:apartment_id" element={<AparmentDetailPage/>}></Route>
        <Route path="/" element={<ApartmentList />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </div>
      <Footer />
      
      
    </>
  )
}

export default App
