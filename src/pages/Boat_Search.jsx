import { Helmet } from "react-helmet";
import Boat_Search_S from "../sections/Boat_Search_S";

const Boat_Search = () => {
  return (
    <>
      <Helmet>
        <title> Boat Search | Anyvessel</title>
      </Helmet>

      <Boat_Search_S />
    </>
  );
};

export default Boat_Search;
