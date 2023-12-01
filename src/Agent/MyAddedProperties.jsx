import useAuth from "../Hooks/useAuth";
import MyAddedPropertiesCard from "./MyAddedPropertiesCard";
import useProperties from "../Hooks/useProperties";
import Swal from "sweetalert2";

const MyAddedProperties = () => {

    const [properties] = useProperties();

    const { user } = useAuth();

    const propertyFilter = properties.filter(property => user.email == property.useremail);

    const handleDeleteItem = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://realton-server.vercel.app//properties/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your property has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    My Added Properties
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {
                    propertyFilter.map(property => <MyAddedPropertiesCard key={property._id} property={property} handleDeleteItem={handleDeleteItem} />)
                }
            </div>
        </div>
    );
};

export default MyAddedProperties;