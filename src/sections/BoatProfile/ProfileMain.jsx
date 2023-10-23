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
                <div className="col-span-11 rounded-lg lg:h-[870px]">
                    {/* Sidebar */}
                    <ProfileNav />

                    {/* Outlet */}
                    <main className="bg-white p-8 mt-6 rounded-lg">
                        <Outlet />
                    </main>
                </div>

                {/* <div className="col-span-3 bg-white rounded-lg text-center">Chat</div> */}
            </div>
        </section>
    );
};

export default ProfileMain;