import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useProfileData = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    Axios(`user-data/${user?.email}`)
      .then((res) => setProfileData(res?.data))
      .catch((err) => console.log(err));
  }, [user]);

  return { profileData };
};

export default useProfileData;
