import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useProfileData = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const [profileData, setProfileData] = useState(null);
  console.log("hossen12@gmail.com ", profileData);

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
