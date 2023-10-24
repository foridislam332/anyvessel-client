import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useAllCrew = () => {
  const [Axios] = useAxios();
  const [allCrewData, setAllCrewData] = useState(null);

  useEffect(() => {
    Axios(`crew-data`)
      .then((res) => setAllCrewData(res?.data))
      .catch((err) => {
        toast.error("Something Wrong!");
        // console.log(err)
      });
  }, []);

  return { allCrewData };
};

export default useAllCrew;
