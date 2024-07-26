import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ApartmentList from './pages/ApartmentsList'
import AparmentDetailPage from './pages/ApartmentDetailPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <div id="main">
      <Sidebar />
      <Routes>
        <Route path="/" element={<ApartmentList />}></Route>
        <Route path="/ApartmentDetailsPage/:apartment_id" element={<AparmentDetailPage/>}></Route>
      </Routes>
      </div>
      <Footer />
      
      
    </>
  )
}

export default App
