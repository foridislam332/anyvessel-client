import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useVessel = () => {
    const [Axios] = useAxios();
    const { data: vesselData = [], isLoading: loading, refetch, } = useQuery({
        queryKey: ["vesselData"],
        queryFn: async () => {
            const res = await Axios.get('/vessel');
            return res.data;
        },
    });
    return { vesselData, loading, refetch };
};

export default useVessel;
