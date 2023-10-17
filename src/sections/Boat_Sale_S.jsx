import { useEffect, useState } from "react";
import BoatSaleC from "../components/BoatSaleC";
import useBoatSale from "../hooks/useBoatSale";

const Boat_Sale_S = () => {
  const { allBoatSaleData } = useBoatSale();
  const [saleData, setSaleDate] = useState(null);
  console.log(" saleData ", saleData);

  useEffect(() => {
    setSaleDate(allBoatSaleData);
  }, [allBoatSaleData]);

  return (
    <section className="py-16 bg-[#F0F6FB]">
      <div className="container">
        <p className="mb-4">Boat items: {saleData?.length}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {saleData &&
            saleData.map((boat, index) => (
              <BoatSaleC key={index} boat={boat} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Boat_Sale_S;
