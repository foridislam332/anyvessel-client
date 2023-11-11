// import { useEffect, useState } from "react";
// import useAuth from "./useAuth";
// import useAxios from "./useAxios";
// import { toast } from "react-toastify";

// const useCurrentUser = () => {
//   const { user } = useAuth();
//   const [Axios] = useAxios();
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     Axios(`/users/${user?.email}`)
//       .then((res) => {
//         setCurrentUser(res?.data);
//       })
//       .catch((err) => {
//         toast.error("Something Wrong!");
//         // console.log(err)
//       });
//   }, [user ,currentUser?.identityPhoto]);

//   return { currentUser };
// };

// export default useCurrentUser;



import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCurrentUser = () => {
    const { user } = useAuth();
  const [Axios] = useAxios();
    const { data: currentUser = [], isLoading: currentUserLoading, refetch } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const res = await Axios.get(`/users/${user?.email}`);
            return res.data;
        },
    });
    return {currentUser, currentUserLoading, refetch};
};

export default useCurrentUser;
