import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import apartmentListings from '../dataset/listings.json'
import ApartmentCard from "../components/ApartmentCard";
import "./ApartmentDetailPage.css"





function ApartmentDetailPage() {
    const { apartment_id } = useParams();
    console.log(apartment_id);
  
    const apartment = apartmentListings.results.find((eachApartment) => {
      return eachApartment.id == apartment_id;
    });
  
    console.log(apartment);

    
    
    return (
        <ul className="apartment-detail-container">
            

            <li className="card-container">
            <img src={apartment.picture_url} alt="" /> 
            <h2>{apartment.host_location} - {apartment.host_neighbourhood}</h2>
            <h2>{apartment.name}</h2>
            <p>{apartment.accommodates} Guest | {apartment.bedrooms} Bedrooms | {apartment.beds} Bed</p>
            
            
            <p>{apartment.description}</p> 
            <p>Price: {apartment.price}</p>
            <div className="button-container">
            <button >Edit</button>
            </div>
            </li>
            
            <div className="amenities-section">
              
              <h2>What this place offer</h2>
                <div className="amenities-container">{apartment.amenities.map((eachAmeniti)=>{
                  return <p>{eachAmeniti}</p>
                })}</div>

             
              
              
            </div>
            
        
            </ul>
    )
}
export default ApartmentDetailPage