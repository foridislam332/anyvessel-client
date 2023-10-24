import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useCurrentUser = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    Axios(`/users/${user?.email}`)
      .then((res) => {
        setCurrentUser(res?.data);
      })
      .catch((err) => {
        toast.error("Something Wrong!");
        // console.log(err)
      });
  }, [user]);

  return { currentUser };
};

export default useCurrentUser;
