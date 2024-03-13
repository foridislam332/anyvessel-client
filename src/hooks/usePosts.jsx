import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const usePosts = () => {
    const [Axios] = useAxios();
    const { currentUser } = useAuth();
    const {
        data: postData = [], isLoading: loading, refetch } = useQuery({
            queryKey: ["postData"],
            queryFn: async () => {
                const res = await Axios.get(`/posts/${currentUser?._id}`);
                return res.data;
            },
        });

    return { postData, loading, refetch };
};

export default usePosts;