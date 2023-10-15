import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxios from './useAxios';
import useCurrentUser from './useCurrentUser';

const useAllBoatSailingPost = () => {
    const { currentUser } = useCurrentUser();
    const [Axios] = useAxios();
    const [boatSellPost, setBoatSellPost] = useState()

    useEffect(() => {
        Axios.get('boat-sailing')
            .then(res => {
                setBoatSellPost(res.data)
            })
            .catch(error => console.log(error))

    }, [currentUser]);
    return { boatSellPost }
};

export default useAllBoatSailingPost;

