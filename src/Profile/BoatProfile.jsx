import { MdAccountCircle } from "react-icons/md";
const BoatProfile = ({ user }) => {
    const { identityPhoto, picture, fullName, gender } = user;
    return (
        <section>
            <div>
                <img className="w-full h-[400px]" src={identityPhoto} alt="" />
                <div className="flex justify-between mr-3">
                    <div className="flex gap-2">
                        <div>
                            <img src={picture} className="w-10 h-10 rounded-full" alt="" />
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <h2 className="text-2xl font-semibold">{fullName}</h2>
                                <div className="mt-2 text-sm flex gap-1">
                                    <p>65</p>,
                                    <p>{gender}</p>

                                </div>

                            </div>
                            <div className="flex gap-1 items-center">
                                <div className="flex items-center gap-1 border rounded-full px-1">
                                    <MdAccountCircle className="text-xl " />
                                    <span className=""> PIV</span>
                                </div>
                                <p>
                                    Personal Identity
                                </p>

                            </div>
                        </div>


                    </div>
                    <img className="w-40 h-40 border-2 border-red-700  -mt-24" src={picture} alt="" />
                </div>

            </div>
        </section>
    );
};

export default BoatProfile;