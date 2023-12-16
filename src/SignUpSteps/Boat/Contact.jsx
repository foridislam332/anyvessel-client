import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAllBoatSailingPost from "../../hooks/useAllBoatSailingPost";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useCurrentUser from "../../hooks/useCurrentUser";
import Swal from "sweetalert2";

// skype validation
function validateSkypeLink(skypeLink) {
  const regex = `/^skype:[a-z0-9_.-]+?$/i`;
  return regex.test(skypeLink);
}

const Contact = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const { boatSellPost } = useAllBoatSailingPost();
  const { currentUser } = useCurrentUser();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  if (boatSellPost === undefined) {
    return <h2>Loading...</h2>;
  }
  const newPost = boatSellPost[boatSellPost.length - 1];
  const newPostID = newPost?._id;
  const skypeLink = "https://join.skype.com/invite/";
  const onSubmit = (data) => {
      if (skypeLink === data.seller_skype.slice(0, 30)) {
        
      const newData = {
        newPostID: newPostID,
        ownerUserId: currentUser?._id,
        ownerUserEmail: currentUser?.email,
        sellerName: data.sellerName,
        sellerEmail: data.sellerEmail,
        seller_Number: data.seller_Number,
        seller_skype: data.seller_skype,
      };

      Axios.patch("boatSailing-contact", newData)
        .then((res) => {
          if (res?.status === 200) {
            toast.success("Boat Sailing Contact Info update successful!");
          }
        })
        .catch((err) => {
          toast.error("Somethings else!");
          // console.log(err);
        });
    } else {
      toast.success("Skype Link Isn't Valid");
    }
  };
  return (
    <section>
      <div className="flex justify-end mb-12">
        <button className="text-white font-light bg-blue px-4 py-2 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300">
          Add Contact Details
        </button>
      </div>

      <div className="max-w-[677px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-darkBlue text-sm inline-block mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                {...register("sellerName")}
                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-darkBlue text-sm inline-block mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                {...register("sellerEmail")}
                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
              />
            </div>
            <div>
              <label
                htmlFor="phone_number"
                className="text-darkBlue text-sm inline-block mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone_number"
                type="text"
                placeholder="Your Phone Number"
                defaultValue={newPost?.contact?.seller_Number}
                {...register("seller_Number")}
                className=" appearance-none  text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
              />
            </div>
            <div>
              <label
                htmlFor="skype"
                className="text-darkBlue text-sm inline-block mb-2"
              >
                Skype
              </label>
              <input
                id="skype"
                type="url"
                defaultValue={newPost?.contact?.seller_skype}
                placeholder="https://join.skype.com/invite/..."
                {...register("seller_skype")}
                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
              />
            </div>
          </div>
          <div className="flex justify-center gap-10 my-16">
            <button className="text-white font-light bg-blue py-[7px] rounded-[9px] border-2 border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
              Confirm
            </button>

            <div className="cursor-pointer text-blue font-light bg-transparent py-[7px] rounded-[9px] border-2 border-blue hover:bg-blue hover:text-white hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
              Cancel
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
