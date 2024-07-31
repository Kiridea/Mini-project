import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ApartmentList from './pages/ApartmentsList'
import AparmentDetailPage from './pages/ApartmentDetailPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import AddForm from './components/AddForm'
import UpdateApartment from './pages/UpdateApartment'
import { useState } from 'react'
import apartmentListings from './dataset/listings.json'

function App() {
  const [ApartmentPlans, setApartmentPlans] = useState(apartmentListings.results);
  return (
    <>
      <Navbar />
      <div id="main">
      <Sidebar />
      <Routes>
        <Route path="/ApartmentDetailsPage/:apartment_id" element={<AparmentDetailPage ApartmentPlans={ApartmentPlans} />} />
        <Route path="/" element={<ApartmentList ApartmentPlans={ApartmentPlans} setApartmentPlans={setApartmentPlans} />} />
        <Route path="/about" element={<About />}/>
        <Route path="/edit-form/:apartment_id" element={<UpdateApartment ApartmentPlans={ApartmentPlans} setApartmentPlans={setApartmentPlans} />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </div>

      <Footer />
      
      
    </>
  )
}

export default App
