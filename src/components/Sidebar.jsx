import './Sidebar.css'
import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <div id="sidebar-container">
            <h2>Menu</h2>
            <hr />
            <div id="sidebar-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>

        </div>
    )
}

export default Sidebar