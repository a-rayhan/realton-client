import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import FavoriteCard from "./FavoriteCard";
import Swal from "sweetalert2";

const Favourites = () => {

    const axiosSecure = useAxiosSecure();

    const { refetch, data: wishlists = [] } = useQuery({
        queryKey: ['wishlists'],
        queryFn: async () => {
            const res = await axiosSecure.get('/wishlists');
            return res.data;
        }
    })

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
                fetch(`https://realton-server.vercel.app//wishlists/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your wishlist item has been deleted.',
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
                    My Wishlists
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    wishlists.map(wishlist => <FavoriteCard key={wishlist._id} wishlist={wishlist} handleDeleteItem={handleDeleteItem} />)
                }
            </div>
        </div>
    );
};

export default Favourites;