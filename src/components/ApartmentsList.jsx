import apartmentListings from '../dataset/listings.json'
import ApartmentCard from './ApartmentCard'
import { useState } from 'react';
import './ApartmentsList.css'

function ApartmentList() {
    const [ApartmentPlans, setApartmentPlans] = useState(apartmentListings.results);
    const DeleteApartment = (id) => {
        const filteredApartments = ApartmentPlans.filter(plan => plan.id !== id);
        setApartmentPlans(filteredApartments);
};
    return (
        <>
            <ul id='card-container'>
                {
                    ApartmentPlans.map((eachApartment) => {
                        return <ApartmentCard eachApartment={eachApartment} DeleteApartment={DeleteApartment} key={eachApartment.id} />
                    })
                }
            </ul>
        </>
    )
}

export default ApartmentList