import './AddForm.css'
import { useState } from "react";
import apartmentListings from '../dataset/listings.json'

function AddForm({ApartmentPlans, setApartmentPlans}) {

    const [location, setLocation] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [accommodates, setAccommodates] = useState(0)
    const [bedrooms, setBedrooms] = useState(0)
    const [beds, setBeds] = useState(0)
    const [price, setPrice] = useState(0)
    
    function addApartment(event) {
        event.preventDefault();

        const newApartment = {
            host_location: location,
            host_neighbourhood: neighbourhood,
            name: name,
            picture_url: image,
            description: description,
            accommodates: accommodates,
            bedrooms: bedrooms,
            beds: beds,
            price: price,
            id: ApartmentPlans.length
        };
        const newApartmentClone = structuredClone(ApartmentPlans)
        newApartmentClone.unshift(newApartment)
        setApartmentPlans(newApartmentClone)
        
        setLocation("");
        setNeighbourhood("");
        setName("");
        setImage("");
        setDescription("");
        setAccommodates(0);
        setBedrooms(0);
        setBeds(0);
        setPrice(0);
    }

    return (
        <form>
            <h3>Add an Apartment</h3>
            <div className="inputs">
                    <label className="text-inputs">
                        Location
                        <input onChange={(event) => setLocation(event.target.value)} type="text" name="location" placeholder="Apartment location" />
                    </label>
                    <label className="text-inputs">
                        Neighbourhood
                        <input onChange={(event) => setNeighbourhood(event.target.value)} type="text" name="neighbourhood" placeholder="Apartment neighbourhood" />
                    </label>
                    <label className="text-inputs">
                        Name
                        <input onChange={(event) => setName(event.target.value)} type="text" name="apartmentName" placeholder="Add a listing name" />
                    </label>
                    <label className="num-inputs">
                        Accommodates
                        <input onChange={(event) => setAccommodates(event.target.value)} type="number" name="accommodates" />
                    </label>
                    <label className="num-inputs">
                        Bedrooms
                        <input onChange={(event) => setBedrooms(event.target.value)} type="number" name="bedrooms" />
                    </label>
                    <label className="num-inputs">
                        Beds
                        <input onChange={(event) => setBeds(event.target.value)} type="number" name="beds" />
                    </label>
                    <label className="num-inputs">
                        Price 
                        <input onChange={(event) => setPrice(event.target.value)} type="number" name="price" placeholder="$" />
                    </label>
                    <label className="text-inputs">
                        Image
                        <input onChange={(event) => setImage(event.target.value)} type="text" name="image" placeholder="Image url" />
                    </label>
                    <label className="text-inputs">
                        Description
                        <textarea id="description-box" onChange={(event) => setDescription(event.target.value)} type="text" name="description" placeholder="Apartment Description" />
                    </label>

            </div>
            <button onClick={addApartment} type="submit">Add apartment</button>
        </form>
    )
}

export default AddForm;