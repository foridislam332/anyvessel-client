import useAllCrew from "../hooks/useAllCrew";
import Crew_Search_S from "../sections/Crew_Search_S";

const Crew_Search = () => {
  const { allCrewData } = useAllCrew();
  console.log("allCrewData ", allCrewData);
  return (
    <div>
      <Crew_Search_S />
    </div>
  );
};

export default Crew_Search;
