import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useProperties from "../Hooks/useProperties";
import { useEffect, useState } from "react";

const UpdateProperty = () => {

    const [properties] = useProperties();

    const { user } = useAuth();

    const [propertyItem, setPropertyItem] = useState([]);

    const { updateId } = useParams();

    useEffect(() => {
        const findPropertyId = properties.find(property => property._id == updateId);
        setPropertyItem(findPropertyId);
    }, [updateId, properties]);

    const handleUpdateProperty = e => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const location = form.location.value;
        const rating = form.rating.value;
        const description = form.description.value;

        console.log(title, price, photo, location, rating, description);

        const updateProperty = { title, price, photo, location, rating, description };
        console.log(updateProperty);

        fetch(`http://127.0.0.1:5000/properties/${propertyItem._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProperty)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Updated succesfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Update Existing Property
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="px-4 md:px-8 py-7 md:py-5 bg-white rounded-2xl">
                <form onSubmit={handleUpdateProperty}>
                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="md:px-4 mb-1">
                                Title
                            </label>

                            <input type="text" name="title" defaultValue={propertyItem.title} placeholder="Enter property title" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-2 gap-x-5">
                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Price
                                </label>

                                <input type="text" name="price" defaultValue={propertyItem.price} placeholder="Enter property price" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Location
                                </label>

                                <input type="text" name="location" defaultValue={propertyItem.location} placeholder="Enter property location" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Property Photo Url
                                </label>

                                <input type="text" name="photo" defaultValue={propertyItem.photo} placeholder="Enter property photo url" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Rating
                                </label>

                                <input type="text" name="rating" defaultValue={propertyItem.rating} placeholder="Enter rating" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="md:px-4 mb-1">
                                Description
                            </label>

                            <textarea rows={3} type="text" name="description" defaultValue={propertyItem.description} placeholder="Enter short description" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-7">
                        <button className="text-xl bg-black hover:bg-[#eb6753] py-4 w-full rounded-xl text-white font-medium">
                            Update Property
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProperty;