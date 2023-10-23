import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// icons image
import user2 from "../../assets/images/user-3.png";

// internal file
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const BS_Services = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      userEmail: user?.email,
      ...data,
    };

    Axios.patch("boat-services-data-service", newData)
      .then((res) => {
        navigate("/sign-up-step/advert", {
          replace: true,
        });

        if (res?.status === 200) {
          navigate("/sign-up-step/advert", {
            replace: true,
          });
        }
      })
      .catch((err) => {
        toast.error("Somethings else!");
        console.log(err);
      });
  };

  const serviceItems = (data, idName, labelText) => {
    return (
      <div className="flex items-center justify-center w-full border border-[#A1C7EC] rounded-xl px-2 py-3">
        <label
          htmlFor={idName}
          className="w-full flex justify-between items-center cursor-pointer"
        >
          <p> {labelText} </p>
          <div className="relative">
            <input
              {...register(`${data}`)}
              id={idName}
              name={idName}
              type="checkbox"
              className="sr-only"
            />
            <div className="dot_Bg block bg-[#A1C7EC] w-10 h-5 rounded-full transition"></div>
            <div className="dot absolute left-1 top-[3px] bg-[#486786] w-3.5 h-3.5 rounded-full transition"></div>
          </div>
        </label>
      </div>
    );
  };

  return (
    <div className="bg-white bg-opacity-90 px-5 sm:px-10 pb-10 md:px-[93px] md:pb-[30px] mt-6 rounded-[10px]">
      <div className="max-w-[715px] mx-auto text-center mb-6">
        <h2 className="text-lightBlue text-[19px]">Services to provide</h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cleaning */}
            {serviceItems("cleaning", "cleaning", "CLEANING")}

            {/* Paining */}
            {serviceItems("paining", "paining", "PAINTING")}

            {/* Rigging */}
            {serviceItems("rigging", "rigging", "RIGGING")}

            {/* SAIL MAKERS AND REPAIRS */}
            {serviceItems(
              "sailMakersRepairs",
              "sailMakersRepairs",
              "SAIL MAKERS AND REPAIRS"
            )}

            {/* ELECTRICS */}
            {serviceItems("electrics", "electrics", "ELECTRICS")}

            {/* HVAC AND PLUMBING */}
            {serviceItems(
              "hvacAndPlumbing",
              "hvacAndPlumbing",
              "HVAC AND PLUMBING"
            )}

            {/* MECHANICS */}
            {serviceItems("mechanics", "mechanics", "MECHANICS")}

            {/* FLOWER ARRANGEMENTS AND DELIVERIES */}
            {serviceItems(
              "arrangementsAndDeliveries",
              "arrangementsAndDeliveries",
              "FLOWER ARRANGEMENTS AND DELIVERIES"
            )}

            {/* MUSIC BANDS AND SOLO MUSICIANS */}
            {serviceItems(
              "musicBands",
              "musicBands",
              "MUSIC BANDS AND SOLO MUSICIANS"
            )}

            {/* FOOD AND BEVERAGE DELIVERIES */}
            {serviceItems(
              "foodAndBeverage",
              "foodAndBeverage",
              "FOOD AND BEVERAGE DELIVERIES"
            )}

            {/* CAR RENTALS */}
            {serviceItems("carRentals", "carRentals", "CAR RENTALS")}
          </div>

          {/* others */}
          <div>
            <label htmlFor="others"> Others </label>

            <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2">
              <input
                id="others"
                placeholder="You can add an advert IT CAN BE A BOX WITH 100 CHARACTERS TO FILL"
                {...register(`others`)}
                className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
              />
              <img
                src={user2}
                alt="You can add an advert IT CAN BE A BOX WITH 100 CHARACTERS TO FILL"
              />
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="mt-12 w-fit mx-auto space-x-4">
          <button
            type="submit"
            className="text-white text-sm font-light bg-blue bg-opacity-90 px-7 md:px-14 py-[9px] rounded-lg hover:bg-transparent hover:text-blue border border-blue duration-300"
          >
            Confirm
          </button>

          <Link
            to="/register"
            className="text-blue text-sm bg-transparent bg-opacity-90 px-[27px] md:px-[55px] py-2 rounded-lg hover:bg-blue hover:text-white border-2 border-blue duration-300"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BS_Services;
