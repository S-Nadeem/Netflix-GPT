import React, { useEffect } from "react";
import {
  Logo_url,
  SUPPORTED_LANGUAGES,
  User_Profile,
} from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/Slices/userSlice";
import { addgptSearch } from "../utils/store/Slices/gptSlice";
import { changeLanguage } from "../utils/store/Slices/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGpttoggle = () => {
    dispatch(addgptSearch());
  };

  const handleLanguageToogle = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-[98.8vw] px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={Logo_url} className="w-48" alt="Logo_url" />
      {user && (
        <div className="flex">
          <select
            onChange={handleLanguageToogle}
            className="  rounded-lg mr-[10px] h-[45px] w-[100px] text-center bg-gray-900 text-white"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleGpttoggle}
            className="mr-[20px] w-[100px] h-[45px] rounded-lg bg-blue-500
           text-white"
          >
            GPT search
          </button>
          <img
            src={user?.photoURL === null ? User_Profile : user?.photoURL}
            alt="userProfile"
            className="w-12 h-12 mr-3 rounded-lg"
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
