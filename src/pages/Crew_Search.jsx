import { Helmet } from "react-helmet";
import Crew_Search_S from "../sections/Crew_Search_S";

const Crew_Search = () => {
  return (
    <>
      <Helmet>
        <title>Crew Search | Anyvessel</title>
      </Helmet>

      <Crew_Search_S />
    </>
  );
};

export default Crew_Search;
