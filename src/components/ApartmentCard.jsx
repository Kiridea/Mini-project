import './ApartmentCard.css'
import { Link } from 'react-router-dom'

function ApartmentCard(props) {
    const { eachApartment: { id, picture_url, host_location, host_neighbourhood, price }, DeleteApartment } = props
    return (

        <li className="card">
           <Link to={`/ApartmentDetailsPage/${id}`}> 
            <button onClick={()=>DeleteApartment(id)} id="delete-button">X</button>
            <img src={picture_url} alt="picture" />
            <div className="info">
                <p>{host_location}</p>
                <p>{host_neighbourhood}</p>
                <p>{price}</p>
            </div>
        </Link>
        </li> 

    )
}

export default ApartmentCard