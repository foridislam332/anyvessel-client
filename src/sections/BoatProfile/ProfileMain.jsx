import { Outlet } from "react-router";
import ProfileNav from "../../components/ProfileNav";

// banner bg
import BannerBg from "../../assets/images/hero-bg.png";

const ProfileMain = () => {
    return (
        <section
            style={{ backgroundImage: `url(${BannerBg})` }}
            className="relative min-h-[500px] md:min-h-[730px] bg-cover bg-center py-14"
        >
            <div className="container grid grid-cols-11 gap-8">
                <div className="col-span-11 bg-white p-8 rounded-lg lg:h-[870px]">
                    {/* Sidebar */}
                    <ProfileNav />

                    {/* Outlet */}
                    <main className="bg-white p-2 mt-5">
                        <Outlet />
                    </main>
                </div>

                {/* <div className="col-span-3 bg-white rounded-lg text-center">Chat</div> */}
            </div>
        </section>
    );
};

export default ProfileMain;