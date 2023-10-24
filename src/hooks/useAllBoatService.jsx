import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useAllBoatService = () => {
  const [Axios] = useAxios();
  const [allBoatService, setAllCrewData] = useState(null);

  useEffect(() => {
    Axios(`boat-service`)
      .then((res) => setAllCrewData(res?.data))
      .catch((err) => {
        toast.error("Something Wrong!");
        // console.log(err)
      });
  }, []);

  return { allBoatService };
};

export default useAllBoatService;
