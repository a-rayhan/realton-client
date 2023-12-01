import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import AdvertiseTableRow from "./AdvertiseTableRow";

const AdvertiseTable = ({ properties }) => {

    const axiosSecure = useAxiosSecure();

    const handleAdvertise = property => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Advertised!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/properties/${property._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                icon: "success",
                                title: 'Advertised'
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
                            properties.map(property => <AdvertiseTableRow key={property._id} property={property} handleAdvertise={handleAdvertise} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdvertiseTable;