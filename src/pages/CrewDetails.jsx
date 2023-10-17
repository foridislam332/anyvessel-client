import { useLoaderData } from "react-router-dom";

const CrewDetails = () => {
  const loadData = useLoaderData();
  console.log("loadData ", loadData);

  return <div>Crew Search Details</div>;
};

export default CrewDetails;
