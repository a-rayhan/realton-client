import Swal from "sweetalert2";
import ManagePropertiesRow from "./ManagePropertiesRow";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

const ManagePropertiesTable = ({ properties }) => {

    const axiosSecure = useAxiosSecure();

    const handleStatus = property => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Accepted!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/properties/${property._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                icon: "success",
                                title: 'Accepted'
                            });
                        }
                    })
            }



        });
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Property Details</th>
                            <th>Agent Info</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            properties.map(property => <ManagePropertiesRow key={property._id} property={property} handleStatus={handleStatus} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePropertiesTable;