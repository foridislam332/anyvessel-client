import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useBoatSale = () => {
  const [Axios] = useAxios();
  const [allBoatSaleData, setAllBoatSaleData] = useState(null);

  useEffect(() => {
    Axios(`boat-sale-data`)
      .then((res) => setAllBoatSaleData(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return { allBoatSaleData };
};

export default useBoatSale;
