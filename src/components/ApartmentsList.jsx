import apartmentListings from '../dataset/listings.json'
import ApartmentCard from './ApartmentCard'
import './ApartmentsList.css'

function ApartmentList() {
    return (
        <>
            <ul id='card-container'>
                {
                    apartmentListings.results.map((eachApartment) => {
                        return <ApartmentCard eachApartment={eachApartment} key={eachApartment.id} />
                    })
                }
            </ul>
        </>
    )
}

export default ApartmentList