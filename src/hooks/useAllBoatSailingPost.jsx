import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useAllBoatSailingPost = () => {
    const { currentUser } = useAuth();
    const [Axios] = useAxios();
    const [boatSellPost, setBoatSellPost] = useState()

    useEffect(() => {
        Axios.get('vessel')
            .then(res => {
                setBoatSellPost(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [currentUser]);
    return { boatSellPost }
};

export default useAllBoatSailingPost;

