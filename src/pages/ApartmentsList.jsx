
import ApartmentCard from '../components/ApartmentCard'
import { useState } from 'react';
import './ApartmentsList.css'

function ApartmentList({ApartmentPlans, setApartmentPlans}) {
    
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