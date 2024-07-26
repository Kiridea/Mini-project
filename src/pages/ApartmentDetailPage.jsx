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
            <div className="title-container">
            <h1>Apartment Detail Page</h1>
            </div>

            <li className="card-container">
            <img src={apartment.picture_url} alt="" /> 
            <h2>{apartment.host_location}</h2>
            <h2>{apartment.name}</h2>
            <p>{apartment.accommodates}Guest</p>
            <p>{apartment.bedrooms}Bedrooms</p>
            <p>{apartment.beds}Bed</p>
            <p>{apartment.description}</p> 
            </li>
            
        
            </ul>
    )
}
export default ApartmentDetailPage