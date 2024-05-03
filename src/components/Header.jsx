import React from "react";
import { Logo_url, User_Profile } from "../utils/Links";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const onsignOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={Logo_url} className="w-48" alt="Logo_url" />
      {user && (
        <div className="flex">
          <img
            src={user?.photoURL === null ? User_Profile : user?.photoURL}
            alt="userProfile"
            className="w-12 h-12 mr-3"
          />
          <button
            onClick={onsignOutHandler}
            className="rounded-lg text-white hover:bg-red-700  h-12 p-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
