import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const usePhotoGallery = () => {
    const { currentUser } = useAuth();
    const [Axios] = useAxios();
    const {
        data: photoGalleryData = [], isLoading: loading, refetch } = useQuery({
            queryKey: ["photoGalleryData"],
            queryFn: async () => {
                const res = await Axios.get(`/gallery/${currentUser?._id}`);

                return res.data;
            },
        });

    return { photoGalleryData, loading, refetch };
};

export default usePhotoGallery;