import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useMyVessel = () => {
    const { user } = useAuth();
    const [Axios] = useAxios();
    const { data: myVesselData = [], isLoading: loading, refetch, } = useQuery({
        queryKey: ["myVesselData"],
        queryFn: async () => {
            const res = await Axios.get(`/vessel/${user?.email}`);
            return res.data;
        },
    });
    return { myVesselData, loading, refetch };
};

export default useMyVessel;