import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCurrentUser = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const {
    data: currentUser = [],
    isLoading: currentUserLoading,
    refetch,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const res = await Axios.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  return { currentUser, currentUserLoading, refetch };
};

export default useCurrentUser;
