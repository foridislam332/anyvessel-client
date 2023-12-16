import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useProfileData = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    Axios(`user-data/${user?.email}`)
      .then((res) => setProfileData(res?.data))
      .catch((err) => {
        toast.error("Something Wrong!");
        // console.log(err)
      });
  }, [user]);

  return { profileData };
};

export default useProfileData;
