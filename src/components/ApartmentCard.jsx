import './ApartmentCard.css'

function ApartmentCard(props) {
    const { eachApartment: { id, picture_url, host_location, host_neighbourhood, price }, DeleteApartment } = props
    return (

        <li className="card">
            <img src={picture_url} alt="picture" />
            <div className="info">
                <p>{host_location}</p>
                <p>{host_neighbourhood}</p>
                <p>{price}</p>
                <button onClick={()=>DeleteApartment(id)} >X</button>
            </div>
        </li>

    )
}

export default ApartmentCard