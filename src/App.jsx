import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ApartmentList from './components/ApartmentsList'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div id="main">
      <Sidebar />
      <ApartmentList />
      </div>
      <Footer />
      
      
    </>
  )
}

export default App
