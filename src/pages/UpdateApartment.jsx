import { useState } from "react";
import apartmentListings from '../dataset/listings.json'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ApartmentDetailPage from "./ApartmentDetailPage";
import './UpdateApartment.css'


function UpdateApartment (){
    const { apartment_id } = useParams();
    console.log(apartment_id);
  
    const apartmentToEdit = apartmentListings.results.find((eachApartment) => {
      return eachApartment.id == apartment_id;
    });
    const [picture,setPicture]=useState(apartmentToEdit.picture_url)
    const [location,setLocation]=useState(apartmentToEdit.host_location)
    const [neighbourhood,setNeighbourhood]=useState(apartmentToEdit.host_neighbourhood)
    const [price,setPrice]=useState(apartmentToEdit.price)
    const [name,setName]=useState(apartmentToEdit.name)
    const [guest,setGuest]=useState(apartmentToEdit.accommodates)
    const [bedrooms,setBedrooms]=useState(apartmentToEdit.bedrooms)
    const [beds,setBeds]=useState(apartmentToEdit.beds)
    const [description,setDescription]=useState(apartmentToEdit.description)




    function editApartment(event){
    event.preventDefault();

    const editApartment = {
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

    /* const apartmentListingsCopy = structuredClone(apartmentListings); */
  

    }
    
    return(
        <div>
        <form>
             <span>Edit an Apartment</span>
             <label class="line">
            Apartment Picture
            <input name="image" 
            value={apartmentToEdit.picture_url}
            onChange={(event) => setPicture(event.target.value)} 
            type="url" placeholder={apartmentToEdit.picture_url} />
          </label>
          <label class="line">
            Apartment Location
            <input name="Location" 
            value={apartmentToEdit.host_location}
            onChange={(event) => setLocation(event.target.value)} 
            type="url" placeholder={apartmentToEdit.host_location} />
          </label>
          <label class="line">
          Apartment Neighbourhood
            <input name="neighbourhood" 
            value={apartmentToEdit.host_neighbourhood}
            onChange={(event) => setNeighbourhood(event.target.value)} 
            type="url" placeholder={apartmentToEdit.host_neighbourhood} />
          </label>
          <label class="line">
          Apartment Price
            <input name="price" 
            value={apartmentToEdit.price}
            onChange={(event) => setPrice(event.target.value)} 
            type="url" placeholder={apartmentToEdit.price} />
          </label>
          <label class="line">
          Apartment Name
            <input name="name" 
            value={apartmentToEdit.name}
            onChange={(event) => setName(event.target.value)} 
            type="url" placeholder={apartmentToEdit.name} />
          </label>
          <label class="line">
          Apartment Guest Capacity
            <input name="guest" 
            value={apartmentToEdit.accommodates}
            onChange={(event) => setGuest(event.target.value)} 
            type="url" placeholder={apartmentToEdit.accommodates} />
          </label>
          <label class="line">
          Apartment # of Beds
            <input name="beds" 
            value={apartmentToEdit.beds}
            onChange={(event) => setBeds(event.target.value)} 
            type="url" placeholder={apartmentToEdit.beds} />
          </label>
          <label class="line">
          Apartment Description
            <input id = "description"name="description" 
            value={apartmentToEdit.description}
            onChange={(event) => setDescription(event.target.value)} 
            type="url" placeholder={apartmentToEdit.description} />
          </label>


          <button onClick={(e) => editApartment(e)}>Edit Apartment</button>

        </form>
        </div>
    )
}

export default UpdateApartment