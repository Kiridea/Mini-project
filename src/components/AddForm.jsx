import './AddForm.css'

function AddForm() {
    function addApartment(event) {
        event.preventDefault();

        const newApartment = {

        }
    }

    return (
        <form>
            <h3>Add an Apartment</h3>
            <div className="inputs">
                <div id="text-labels">
                    <label className="text-inputs">
                        Location
                        <input type="text" name="location" placeholder="Apartment location" />
                    </label>
                    <label className="text-inputs">
                        Neighbourhood
                        <input type="text" name="neighbourhood" placeholder="Apartment neighbourhood" />
                    </label>
                    <label className="text-inputs">
                        Name
                        <input type="text" name="apartmentName" placeholder="Add a listing name" />
                    </label>
                    <label className="text-inputs">
                        Image
                        <input type="text" name="image" placeholder="Image url" />
                    </label>
                    <label className="text-inputs">
                        Description
                        <input type="text" name="description" placeholder="Apartment Description" />
                    </label>
                </div>
                <div id="number-labels">
                    <label className="num-inputs">
                        Accommodates
                        <input type="number" name="accommodates" />
                    </label>
                    <label className="num-inputs">
                        Bedrooms
                        <input type="number" name="bedrooms" />
                    </label>
                    <label className="num-inputs">
                        Beds
                        <input type="number" name="beds" />
                    </label>
                    <label className="num-inputs">
                        Price
                        <input type="number" name="price" />€
                    </label>
                </div>

            </div>
            <button type="submit">Add apartment</button>
        </form>
    )
}

export default AddForm;