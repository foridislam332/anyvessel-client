import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCurrentUser = () => {
  const { user } = useAuth();
  console.log(user?.email)
  const [Axios] = useAxios();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    Axios(`/users/${user?.email}`)
      .then((res) =>{ 
        console.log(res)
        setCurrentUser(res?.data)})
      .catch((err) => console.log(err));
  }, [user]);

  return { currentUser };
};

export default useCurrentUser;
