import useBoatSale from "../hooks/useBoatSale";

const Boat_Sale = () => {
  const { allBoatSaleData } = useBoatSale();
  console.log(" allBoatSaleData ", allBoatSaleData);
  return (
    <div>
      <p> Crew Search Coming Soon... </p>
    </div>
  );
};

export default Boat_Sale;
