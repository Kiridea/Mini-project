import HamburguerMenu from '../assets/hamburger-menu-svgrepo-com.svg'
import DefaultUser from '../assets/no-profile-picture-15257 (1).svg'
import './Navbar.css'

function Navbar() {
    return (
        < >
        <section id="Navbar">
            <div id='button-container'>
            <img className='hamburguer-icon' src={HamburguerMenu} alt="" />
            {/* <img className='default-user-icon' src={DefaultUser} alt="" /> */}
            </div>
            <h3>Apartment's Logo</h3>


        </section>
        </>
    )
}

export default Navbar