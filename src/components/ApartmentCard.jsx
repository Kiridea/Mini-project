import './ApartmentCard.css'

function ApartmentCard(props) {
    const { eachApartment: { picture_url, host_location, host_neighbourhood, price } } = props
    return (

        <li className="card">
            <img src={picture_url} alt="picture" />
            <div className="info">
                <p>{host_location}</p>
                <p>{host_neighbourhood}</p>
                <p>{price}</p>
            </div>
        </li>

    )
}

export default ApartmentCard