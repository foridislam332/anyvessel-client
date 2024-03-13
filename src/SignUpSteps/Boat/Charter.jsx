import { AiFillHeart } from "react-icons/ai";

// images
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import useProfileData from "../../hooks/useProfileData";
import BoatOwnerImgGallery from "../../components/BoatOwnerImgGallery";
import BoatOwnerPost from "../../components/BoatOwnerPost";
import useAuth from "../../hooks/useAuth";
import PageLoading from "../../components/PageLoading";

function calculateAge(date) {
  const userDateOfBirth = new Date(date);
  const currentDate = new Date();

  // Calculate the age difference
  let ageDifference = currentDate.getFullYear() - userDateOfBirth.getFullYear();

  if (
    currentDate.getMonth() < userDateOfBirth.getMonth() ||
    (currentDate.getMonth() === userDateOfBirth.getMonth() &&
      currentDate.getDate() < userDateOfBirth.getDate())
  ) {
    ageDifference--;
  }

  // Return the age in the specified format
  return `${ageDifference} years old`;
}

const Charter = () => {
  const { currentUser } = useAuth();

  return (
    <section>
      {!currentUser ? (
        <PageLoading />
      ) : (
        <>
          <div className="flex gap-8 py-5">
            {/* profile image */}
            <div className="relative shrink-0">
              <img
                className="w-28 h-28 object-cover rounded-full"
                src={currentUser?.picture}
                alt=""
              />
              <img
                className="w-[52px] h-[52px] object-cover rounded-full absolute -bottom-1 sm:-bottom-5 -right-1 border-[3px] border-white"
                src={currentUser?.identityPhoto}
                alt=""
              />
            </div>

            {/* company info */}
            <div className="">
              <div className="mb-3">
                <h2 className="text-xl text-[#050F36] font-medium">
                  {currentUser?.fullName}
                  <span className="text-lightBlue text-sm sm:text-base block sm:inline">
                    {" "}
                    ({calculateAge(currentUser?.birthDay)})
                  </span>
                </h2>

                <p className="text-blue font-light">Boat Owner</p>
              </div>
              <p className="line-clamp-2 font-light text-black">
                {currentUser?.description}
              </p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-8 pb-5 border-b border-blue">
            <BoatOwnerImgGallery userId={currentUser?._id} />
          </div>

          <BoatOwnerPost />
        </>
      )}
    </section>
  );
};

export default Charter;
