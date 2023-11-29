import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProperties = () => {
    const axiosSecure = useAxiosSecure();

    const { data: properties = [] } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/properties');
            return res.data;
        }
    })

    return [properties];
};

export default useProperties;