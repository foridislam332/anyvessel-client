import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useAllBoatService = () => {
  const [Axios] = useAxios();
  const [allBoatService, setAllCrewData] = useState(null);

  useEffect(() => {
    Axios(`boat-service`)
      .then((res) => setAllCrewData(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return { allBoatService };
};

export default useAllBoatService;
