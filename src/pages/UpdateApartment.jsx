import { useState } from 'react';
import apartmentListings from '../dataset/listings.json'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ApartmentDetailPage from "./ApartmentDetailPage";
import { useNavigate } from 'react-router-dom';
import './UpdateApartment.css'


function UpdateApartment ({ApartmentPlans, setApartmentPlans}){
    const { apartment_id } = useParams();
    const navigate = useNavigate();
    /* console.log(apartment_id); */
    /* const [ApartmentPlans, setApartmentPlans] = useState(apartmentListings.results); */
  
    const apartmentToEdit = apartmentListings.results.find((eachApartment) => {
      return eachApartment.id == apartment_id;
    });
    const [picture,setPicture]=useState(apartmentToEdit.picture_url || "")
    const [location,setLocation]=useState(apartmentToEdit.host_location || "")
    const [neighbourhood,setNeighbourhood]=useState(apartmentToEdit.host_neighbourhood || "")
    const [price,setPrice]=useState(apartmentToEdit.price || "")
    const [name,setName]=useState(apartmentToEdit.name || "")
    const [guest,setGuest]=useState(apartmentToEdit.accommodates ||"")
    const [bedrooms,setBedrooms]=useState(apartmentToEdit.bedrooms ||"")
    const [beds,setBeds]=useState(apartmentToEdit.beds || "")
    const [description,setDescription]=useState(apartmentToEdit.description || "")




    function editApartment(event){
    event.preventDefault();

    const apartmentToEdit = {
        picture_url: picture,
        host_location: location,
        host_neighbourhood: neighbourhood,
        price: price,
        name: name,
        accomodates: guest,
        bedrooms: bedrooms,
        beds: beds,
        description: description,

    }

     const apartmentListingsCopy = structuredClone(ApartmentPlans);
     
     const indexToEdit = apartmentListingsCopy.findIndex((eachApartment)=>eachApartment.id == apartment_id)
      // apartmentListingsCopy
      // find the index of your apartment (by id)
      console.log(indexToEdit);
       apartmentListingsCopy[indexToEdit] = {...apartmentListingsCopy[indexToEdit], ...apartmentToEdit} 
       console.log(apartmentToEdit);
      setApartmentPlans(apartmentListingsCopy);
      navigate("/"); 
    }
    
    return(
        <div>
        <form>
             <span>Edit an Apartment</span>
             <label className="line">
            Apartment Picture
            <input name="image" 
            value={picture}
            onChange={(event) => setPicture(event.target.value)} 
            type="url" placeholder={apartmentToEdit.picture_url} />
          </label>
          <label className="line">
            Apartment Location
            <input name="Location" 
            value={location}
            onChange={(event) => setLocation(event.target.value)} 
            type="url" placeholder={apartmentToEdit.host_location} />
          </label>
          <label className="line">
          Apartment Neighbourhood
            <input name="neighbourhood" 
            value={neighbourhood}
            onChange={(event) => setNeighbourhood(event.target.value)} 
            type="url" placeholder={apartmentToEdit.host_neighbourhood} />
          </label>
          <label className="line">
          Apartment Price
            <input name="price" 
            value={price}
            onChange={(event) => setPrice(event.target.value)} 
            type="url" placeholder={apartmentToEdit.price} />
          </label>
          <label className="line">
          Apartment Name
            <input name="name" 
            value={name}
            onChange={(event) => setName(event.target.value)} 
            type="url" placeholder={apartmentToEdit.name} />
          </label>
          <label className="line">
          Apartment Guest Capacity
            <input name="guest" 
            value={guest}
            onChange={(event) => setGuest(event.target.value)} 
            type="url" placeholder={apartmentToEdit.accommodates} />
          </label>
          <label className="line">
          Apartment # of Bedrooms
            <input name="bedrooms" 
            value={bedrooms}
            onChange={(event) => setBedrooms(event.target.value)} 
            type="url" placeholder={apartmentToEdit.bedrooms} />
          </label>
          <label className="line">
          Apartment # of Beds
            <input name="beds" 
            value={beds}
            onChange={(event) => setBeds(event.target.value)} 
            type="url" placeholder={apartmentToEdit.beds} />
          </label>
          <label className="line">
          Apartment Description
            <input id = "description"name="description" 
            value={description}
            onChange={(event) => setDescription(event.target.value)} 
            type="url" placeholder={apartmentToEdit.description} />
          </label>


          <button onClick={(e) => editApartment(e)}>Edit Apartment</button>

        </form>
        </div>
    )
}

export default UpdateApartment