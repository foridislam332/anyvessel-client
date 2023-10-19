import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxios from './useAxios';
import useCurrentUser from './useCurrentUser';
import { toast } from 'react-toastify';

const useAllBoatSailingPost = () => {
    const { currentUser } = useCurrentUser();
    const [Axios] = useAxios();
    const [boatSellPost, setBoatSellPost] = useState()

    useEffect(() => {
        Axios.get('boat-sailing')
            .then(res => {
                setBoatSellPost(res.data)
            })
            .catch(error => {
                toast.error("Something Wrong!");
                // console.log(error)
            })

    }, [currentUser]);
    return { boatSellPost }
};

export default useAllBoatSailingPost;

