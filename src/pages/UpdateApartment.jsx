import { useState } from "react";
import apartmentListings from '../dataset/listings.json'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ApartmentDetailPage from "../pages/ApartmentDetailPage";

function UpdateApartment (){
    const { apartment_id } = useParams();
    console.log(apartment_id);
  
    const apartmentToEdit = apartmentListings.results.find((eachApartment) => {
      return eachApartment.id == apartment_id;
    });
    const [picture,setPicture]=useState(apartmentToEdit.picture_url)

    function editApartment(event){
    event.preventDefault();

    const editApartment = {
        picture_url: picture
    }

    /* const apartmentListingsCopy = structuredClone(apartmentListings); */
    


    }
    
    return(
        <div>
        <form>
             <span>Edit an Apartment</span>
             <label>
            Apartment Picture
            <input name="image" 
            value={apartmentToEdit.picture_url}
            onChange={(event) => setPicture(event.target.value)} 
            type="url" placeholder={apartmentToEdit.picture_url} />
          </label>

          <button onClick={(e) => editApartment(e)}>Edit Apartment</button>

        </form>
        </div>
    )
}

export default UpdateApartment