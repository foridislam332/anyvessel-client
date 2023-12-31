import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useAllBoat = () => {
  const [Axios] = useAxios();
  const [allBoatData, setAllBoatData] = useState(null);

  useEffect(() => {
    Axios(`boat-service`)
      .then((res) => setAllBoatData(res?.data))
      .catch((err) => {
        toast.error("Something Wrong!");
        // console.log(err);
      });
  }, []);

  return { allBoatData };
};

export default useAllBoat;
