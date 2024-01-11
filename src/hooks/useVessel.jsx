import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useCurrentUser from "./useCurrentUser";

const useVessel = () => {
  const { currentUser, currentUserLoading } = useCurrentUser();
  const [Axios] = useAxios();
  // console.log("currentUser ", currentUser);
  const {
    data: vessels = [],
    isLoading: vesselLoading,
    refetch,
  } = useQuery({
    queryKey: ["vessels"],
    enabled: !currentUserLoading,
    queryFn: async () => {
      const res = await Axios.get(`/vessels/${currentUser?._id}`);
      return res.data;
    },
  });

  return { vessels, vesselLoading, refetch };
};

export default useVessel;
