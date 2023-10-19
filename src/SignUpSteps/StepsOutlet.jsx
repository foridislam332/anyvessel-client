import { Outlet } from "react-router-dom";
import BannerBg from "../assets/images/hero-bg.png";
import StepNavItems from "./StepNavItems";

const StepsOutlet = () => {
  // const {user}=useAuth()
  // console.log(user)
  return (
    <section
      style={{ backgroundImage: `url(${BannerBg})` }}
      className="relative min-h-[500px] md:min-h-[730px] bg-cover bg-center py-14"
    >
      <div className="container grid grid-cols-11 gap-8">
        <div className="col-span-8 ">
          {/* Sidebar */}
          <StepNavItems />

          {/* Outlet */}
          <main className="bg-white p-2 mt-5">
            <Outlet />
          </main>
        </div>
        <div className="col-span-3 border-2">Chat</div>
      </div>
    </section>
  );
};

export default StepsOutlet;
